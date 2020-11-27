import {Component, OnInit} from '@angular/core';
import {PoNotificationService} from '@po-ui/ng-components';
import {UserDetails} from '../../../../core/auth/model/user-details';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormComponent} from '../../../../shared/component/form/form-component';
import {OpeningHours} from '../opening-hours';
import {OpeningHoursService} from '../opening-hours.service';

@Component({
    selector: 'app-opening-hours',
    templateUrl: './opening-hours.component.html',
    styleUrls: ['./opening-hours.component.scss'],
})
export class OpeningHoursComponent extends FormComponent<OpeningHours> implements OnInit {

    openingHours: OpeningHours;

    form: FormGroup;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
        private openingHoursService: OpeningHoursService,
        private formBuilder: FormBuilder,
    ) {
        super(router, activatedRoute, notificationService);
    }

    ngOnInit(): void {
        this.openingHours = this.activatedRoute.snapshot.data.user.store.openingHours;

        this.cancel = '/loja/perfil';
        this.save = '/loja/perfil';
        this.saveService = item => this.openingHoursService.update(item);
        super.ngOnInit();
    }

    buildForm(): void {
        this.form = this.formBuilder.group({
            openingHours: [this.openingHours, [Validators.required]],
        });
    }

    getOpeningHours(): OpeningHours {
        return this.form.getRawValue();
    }

}
