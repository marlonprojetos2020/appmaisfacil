import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb, PoNotificationService} from '@po-ui/ng-components';
import {UserDetails} from '../../../../core/auth/model/user-details';
import {AuthService} from '../../../../core/auth/auth.service';
import {ProfileService} from '../profile.service';
import {FormComponent} from '../../../../shared/component/form/form-component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {UniqueEmailValidatorService} from '../../users/services/unique-email-validator.service';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent extends FormComponent<UserDetails> implements OnInit {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Perfil', link: '/perfil'},
            {label: 'Editar'},
        ],
    };

    userDetails: UserDetails;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
        private authService: AuthService,
        private profileService: ProfileService,
        private uniqueEmailValidatorService: UniqueEmailValidatorService,
        private formBuilder: FormBuilder,
    ) {
        super(router, activatedRoute, notificationService);
    }

    ngOnInit(): void {
        this.userDetails = this.authService.getUserDetailsSnapshot();
        this.cancel = '/admin/perfil';
        this.save = '/admin/perfil';
        this.saveService = item => this.profileService.update(item)
            .pipe(tap(userDetails => this.authService.updateUserDetails(userDetails)));
        super.ngOnInit();
    }

    buildForm(): void {
        this.form = this.formBuilder.group({
            name: [this.userDetails.name, [Validators.required]],
            email: [this.userDetails.email, [], this.uniqueEmailValidatorService.valid(this.userDetails.email)],
        });
    }

    getUserDetails(): UserDetails {
        return this.form.getRawValue();
    }
}
