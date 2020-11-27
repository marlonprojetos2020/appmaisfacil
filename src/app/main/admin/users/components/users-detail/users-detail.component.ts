import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../user';
import {PoBreadcrumb, PoDialogService} from '@po-ui/ng-components';
import {UsersPhotoService} from '../../services/users-photo.service';
import {environment} from '../../../../../../environments/environment';
import {HttpResponse} from '@angular/common/http';
import {Avatar} from '../../../../../shared/component/avatar-edit/avatar-edit/avatar';
import {AddressToString} from '../../../../../shared/component/form/address-form/address-to-string';

@Component({
    selector: 'app-users-detail',
    templateUrl: './users-detail.component.html',
    styleUrls: ['./users-detail.component.scss'],
})
export class UsersDetailComponent implements OnInit {

    @Input() user: User;
    @Input() back: () => void;
    @Input() edit: () => void;
    @Input() title: string;
    @Input() breadcrumb: PoBreadcrumb;

    urlEditProfilePhoto: string;

    constructor(
        private poDialog: PoDialogService,
        private usersPhotoService: UsersPhotoService,
    ) {
    }

    ngOnInit(): void {
        this.urlEditProfilePhoto = `${environment.apiUrl}/users/${this.user.id}/photo`;
    }

    addressToString(): string {
        return AddressToString.convert(this.user.address);
    }

    onUpdateProfilePhoto(result: HttpResponse<Avatar>): void {
        this.user.userPhoto = result.body;
    }

    deleteUserPhoto(): void {
        this.poDialog.confirm({
            title: 'Remover avatar',
            message: 'Tem certeza que deseja remover sua foto de perfil?',
            confirm: () => this.usersPhotoService.deleteProfilePhoto(this.user.id)
                .subscribe(() => this.user.userPhoto = null),
        });
    }

}
