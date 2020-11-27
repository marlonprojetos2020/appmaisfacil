import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PoCheckboxGroupOption, PoInputComponent, PoNotificationService, PoRadioGroupOption} from '@po-ui/ng-components';
import {FormBuilder, Validators} from '@angular/forms';
import {UniqueEmailValidatorService} from '../../services/unique-email-validator.service';
import {FormComponent} from '../../../../../shared/component/form/form-component';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleType} from '../../../../../core/auth/model/role-type';
import {User} from '../../user';
import {DocumentOptions} from './document-options';

@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent extends FormComponent<User> implements OnInit {

    roles: PoCheckboxGroupOption[];

    @Input() user = {} as User;
    @Input() hiddenRoles = false;
    @Input() hiddenStoreForm = false;
    @Input() hiddenAddressForm = false;

    @ViewChild('documentInput', {static: false}) documentInput: PoInputComponent;

    personTypes: PoRadioGroupOption[] = [
        {label: 'Pessoa Física', value: 'PF'},
        {label: 'Pessoa Jurídica', value: 'PJ'},
    ];
    documentOptions: DocumentOptions;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
        private formBuilder: FormBuilder,
        private uniqueEmailValidatorService: UniqueEmailValidatorService,
    ) {
        super(router, activatedRoute, notificationService);
    }

    ngOnInit(): void {
        this.roles = this.activatedRoute.snapshot.data.roles;

        super.ngOnInit();
        this.updateForm();
    }

    buildForm(): void {
        this.form = this.formBuilder.group({
            name: [this.user.name, [Validators.required]],
            email: [this.user.email, [], this.uniqueEmailValidatorService.valid(this.user.email)],
            roles: [this.user.roles && this.user.roles.map(role => role.value)],
        });
    }

    updateForm(): void {
        if (this.isSeller() || this.isStore()) {
            this.form.addControl('userExtraData', this.formBuilder.group({
                phone: [this.user.userExtraData && this.user.userExtraData.phone],
                personType: [this.user.userExtraData ? this.user.userExtraData.personType : 'PF'],
                document: [this.user.userExtraData && this.user.userExtraData.document],
            }));
            this.updateDocumentOptions();
        } else {
            this.form.removeControl('userExtraData');
        }

        if (!this.isStore()) {
            this.form.removeControl('address');
        }
    }

    getUser(): User {
        const user = this.form.getRawValue();
        return {
            ...user,
            version: this.user.version,
            roles: user.roles && user.roles.map(role => ({value: role})),
        };
    }

    updateDocumentOptions(): void {
        if (this.form.get('userExtraData.personType') && this.form.get('userExtraData.document')) {
            if (this.documentInput) {
                this.documentInput.focus();
            }
            if (this.form.get('userExtraData.personType').value === 'PJ') {
                this.documentOptions = {
                    label: 'CNPJ',
                    placeholder: '00.000.000/0000-00',
                    mask: '99.999.999/9999-99',
                    pattern: '^[0-9]{14}$',
                    errorPattern: 'Digite um CNPJ válido',
                };
            } else {
                this.documentOptions = {
                    label: 'CPF',
                    placeholder: '000.000.000-00',
                    mask: '999.999.999-99',
                    pattern: '^[0-9]{11}$',
                    errorPattern: 'Digite um CPF válido',
                };
            }
        }
    }

    isStore(): boolean {
        return this.hasRole(RoleType.ROLE_STORE);
    }

    isSeller(): boolean {
        return this.hasRole(RoleType.ROLE_SELLER);
    }

    private hasRole(role: RoleType): boolean {
        return this.form && this.form.get('roles').value && this.form.get('roles').value.includes(role);
    }
}
