import {Component} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {PoPageChangePasswordRequirement} from '@po-ui/ng-templates';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {

    urlChangePassword = `${environment.apiUrl}/profile/password`;
    requirements: PoPageChangePasswordRequirement[] = [{
        requirement: 'A senha deve ter entre 3 e 50 caracteres',
        status: (password: string) => password && password.length >= 3 && password.length <= 50,
    }];

}
