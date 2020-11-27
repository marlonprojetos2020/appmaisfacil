import {Component, Input, OnInit} from '@angular/core';
import {PoUploadFileRestrictions} from '@po-ui/ng-components';
import {HttpResponse} from '@angular/common/http';
import {Avatar} from './avatar';

@Component({
    selector: 'app-avatar-edit',
    templateUrl: './avatar-edit.component.html',
    styleUrls: ['./avatar-edit.component.scss'],
})
export class AvatarEditComponent implements OnInit {

    @Input() size: string;
    @Input() src: string;

    @Input() urlEditProfilePhoto;
    @Input() deleteUserPhoto: () => void;
    @Input() success: (result: HttpResponse<Avatar>) => void;

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.png', '.jpg', '.jpeg'],
        maxFileSize: 5242880,
    };

    constructor() {
    }

    ngOnInit(): void {
    }
}
