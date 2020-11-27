import {Component, OnInit} from '@angular/core';
import {FormComponent} from '../../../shared/component/form/form-component';
import {SellerForm} from './seller-form';
import {ActivatedRoute, Router} from '@angular/router';
import {PoNotificationService} from '@po-ui/ng-components';
import {FormBuilder, Validators} from '@angular/forms';
import {UniqueEmailValidatorService} from '../../admin/users/services/unique-email-validator.service';
import {RegisterSellerService} from './register-seller.service';

@Component({
    selector: 'app-register-seller',
    templateUrl: './register-seller.component.html',
    styleUrls: ['./register-seller.component.scss'],
})
export class RegisterSellerComponent extends FormComponent<SellerForm> implements OnInit {

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
        private formBuilder: FormBuilder,
        private registerSellerService: RegisterSellerService,
        private uniqueEmailValidatorService: UniqueEmailValidatorService,
    ) {
        super(router, activatedRoute, notificationService);
    }

    ngOnInit(): void {
        super.ngOnInit();

        this.saveService = this.registerSellerService.save.bind(this.registerSellerService);
        this.save = '/acessar';
    }

    buildForm(): void {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email], this.uniqueEmailValidatorService.valid('')],
            document: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
            phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
        });
    }

    getSellerForm(): SellerForm {
        return this.form.getRawValue();
    }
}
