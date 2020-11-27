import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Address} from './address';
import {AddressApiService} from './address-api/address-api.service';
import {AddressApiResponse} from './address-api/address-api-response';
import {PoInputComponent} from '@po-ui/ng-components';
import {filter, tap} from 'rxjs/operators';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {

    @Output() formChange = new EventEmitter<FormGroup>();
    @Input() address: Address;

    form: FormGroup;

    @ViewChild('streetInput', {static: false}) streetInput: PoInputComponent;
    @ViewChild('numberInput', {static: false}) numberInput: PoInputComponent;

    lastZipcode: string;
    zipcodeError: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private addressApiService: AddressApiService,
    ) {
    }

    ngOnInit(): void {
        this.address = this.address ? this.address : {} as Address;
        this.form = this.formBuilder.group({
            zipcode: [this.address.zipcode],
            street: [this.address.street],
            number: [this.address.number],
            neighborhood: [this.address.neighborhood],
            complement: [this.address.complement],
            city: this.formBuilder.group({
                name: [this.address.city && this.address.city.name],
                stateProvince: [this.address.city && this.address.city.stateProvince],
            }),
        });

        this.lastZipcode = this.address.zipcode;

        this.form.get('zipcode').valueChanges
            .pipe(filter(zipcode => this.lastZipcode !== zipcode))
            .pipe(tap(zipcode => this.lastZipcode = zipcode))
            .pipe(tap(() => this.zipcodeError = false))
            .subscribe(this.updateZipcode.bind(this));

        this.formChange.emit(this.form);
    }

    updateZipcode(): void {
        if (this.form.get('zipcode').valid) {
            this.addressApiService.getAddressFromZipcode(this.form.get('zipcode').value)
                .subscribe((addressApiResponse: AddressApiResponse) => {
                    if (addressApiResponse.logradouro) {
                        this.form.get('street').setValue(addressApiResponse.logradouro);
                    }
                    if (addressApiResponse.bairro) {
                        this.form.get('neighborhood').setValue(addressApiResponse.bairro);
                    }
                    if (addressApiResponse.complemento) {
                        this.form.get('complement').setValue(addressApiResponse.complemento);
                    }
                    this.form.get('city.name').setValue(addressApiResponse.localidade);
                    this.form.get('city.stateProvince').setValue(addressApiResponse.uf);

                    this.zipcodeError = addressApiResponse.erro;

                    if (this.numberInput && this.streetInput) {
                        addressApiResponse.logradouro ? this.numberInput.focus() : this.streetInput.focus();
                    }
                });
        }
    }
}
