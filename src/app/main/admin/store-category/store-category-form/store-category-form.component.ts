import {Component, Input, OnInit} from '@angular/core';
import {PoNotificationService} from '@po-ui/ng-components';
import {FormBuilder} from '@angular/forms';
import {StoreCategory} from '../store-category';
import {FormComponent} from '../../../../shared/component/form/form-component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-store-category-form',
    templateUrl: './store-category-form.component.html',
    styleUrls: ['./store-category-form.component.scss'],
})
export class StoreCategoryFormComponent extends FormComponent<StoreCategory> implements OnInit {

    @Input() storeCategory = {} as StoreCategory;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
        private formBuilder: FormBuilder,
    ) {
        super(router, activatedRoute, notificationService);
    }

    buildForm(): void {
        this.form = this.formBuilder.group({
            name: [this.storeCategory.name],
        });
    }

    getStoreCategory(): StoreCategory {
        return this.form.getRawValue();
    }
}
