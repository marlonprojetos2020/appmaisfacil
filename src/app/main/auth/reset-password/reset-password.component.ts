import {Component} from '@angular/core';
import {PoPageChangePasswordRequirement} from '@po-ui/ng-templates';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {

    urlNewPassword = `${environment.apiUrl}/auth/reset-password`;
    requirements: PoPageChangePasswordRequirement[] = [{
        requirement: 'A senha deve ter entre 3 e 50 caracteres',
        status: (password: string) => password && password.length >= 3 && password.length <= 50,
    }];

}
