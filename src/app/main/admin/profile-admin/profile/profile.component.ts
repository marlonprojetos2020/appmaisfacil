import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfileService} from '../profile.service';
import {User} from '../../users/user';
import {finalize} from 'rxjs/operators';
import {PoDialogService} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {AuthService} from '../../../../core/auth/auth.service';
import {HttpResponse} from '@angular/common/http';
import {UserPhoto} from '../../../../core/auth/model/user-photo';
import {Avatar} from '../../../../shared/component/avatar-edit/avatar-edit/avatar';
import {AddressToString} from '../../../../shared/component/form/address-form/address-to-string';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    user = {} as User;
    loading = true;

    urlEditProfilePhoto = `${environment.apiUrl}/profile/photo`;

    @Input() back = () => this.router.navigateByUrl('/admin');
    @Input() edit = () => this.router.navigateByUrl('/admin/perfil/editar');

    constructor(
        public router: Router,
        private profileService: ProfileService,
        private authService: AuthService,
        private poDialog: PoDialogService,
    ) {
    }

    ngOnInit(): void {
        this.profileService.profile()
            .pipe(finalize(() => this.loading = false))
            .subscribe(
                user => {
                    this.user = user;
                    this.authService.updateUserDetails(user);
                },
            );
    }

    onUpdateProfilePhoto(result: HttpResponse<Avatar>): void {
        this.updateUserDetails(result.body);
    }

    deleteUserPhoto(): void {
        this.poDialog.confirm({
            title: 'Remover avatar',
            message: 'Tem certeza que deseja remover sua foto de perfil?',
            confirm: () => this.profileService.deleteProfilePhoto()
                .subscribe(() => this.updateUserDetails(null)),
        });
    }

    private updateUserDetails(userPhoto: UserPhoto): void {
        this.authService.updateUserDetails({
            ...this.authService.getUserDetailsSnapshot(),
            userPhoto,
        });
        this.user.userPhoto = userPhoto;
    }

    addressToString(): string {
        return AddressToString.convert(this.user.address);
    }
}
