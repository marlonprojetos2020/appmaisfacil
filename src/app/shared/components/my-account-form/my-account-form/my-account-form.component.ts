import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { User } from 'src/app/main/admin/companies/model/user';
import { MyAccountFormService } from '../my-account-form.service';

@Component({
    selector: 'app-my-account-form',
    templateUrl: './my-account-form.component.html',
})
export class MyAccountFormComponent implements OnInit {

    formDadosPessoais: FormGroup;
    currentUser: User = null;

    constructor(
        private formBuilder: FormBuilder,
        private myAccountFormService: MyAccountFormService,
        private poNotificationService: PoNotificationService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.myAccountFormService.getMyAccount().subscribe(
            data => {
                this.currentUser = data;
                this.formDadosPessoais = this.formBuilder.group({
                    name: [this.currentUser.name, Validators.required],
                    email: [this.currentUser.email, Validators.required,
                    this.myAccountFormService.isEmailTaken(this.currentUser.email)],
                });
            });
    }

    dirtyMe(input): void {
        this.formDadosPessoais.get(input).markAsDirty();
    }

    nextForm(): void {
        this.myAccountFormService.editUser(
            this.formDadosPessoais.get('name').value,
            this.formDadosPessoais.get('email').value).subscribe(
                () => {
                    this.poNotificationService.success('Usuário editado com sucesso');
                    this.router.navigate(['/']);
                },
            );
    }
}
