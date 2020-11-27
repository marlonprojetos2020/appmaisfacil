import {Component, Input, OnInit} from '@angular/core';
import {PoNotificationService} from '@po-ui/ng-components';
import {FormBuilder, Validators} from '@angular/forms';
import {Product} from '../model/product';
import {FormComponent} from '../../../../shared/component/form/form-component';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {CustomValidators} from '../../../../shared/validators/custom-validators';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent extends FormComponent<Product> implements OnInit {

    @Input() product = {} as Product;

    constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
        private formBuilder: FormBuilder,
        private datePipe: DatePipe,
    ) {
        super(router, activatedRoute, notificationService);
    }

    buildForm(): void {
        this.form = this.formBuilder.group({
            title: [this.product.title, [Validators.required]],
            price: [this.product.price, [Validators.required, Validators.min(0)]],
            percentageDiscount: [this.product.percentageDiscount, [Validators.min(0), Validators.max(100)]],
            percentageCommission: [this.product.percentageCommission, [Validators.min(5), Validators.max(100)]],
            totalAmount: [this.product.totalAmount, [Validators.required, Validators.min(0)]],
            // startDate: [this.product.endDateTime && new Date(this.product.startDateTime), [Validators.required]],
            startDate: [this.product.endDateTime && new Date(this.product.startDateTime)],
            startTime: [
                this.product.startDateTime && this.datePipe.transform(this.product.startDateTime, 'HH:mm'),
                [CustomValidators.timeHourMinute]],
            endDate: [this.product.endDateTime && new Date(this.product.endDateTime), [Validators.required]],
            endTime: [
                this.product.endDateTime && this.datePipe.transform(this.product.endDateTime, 'HH:mm'),
                [Validators.required, CustomValidators.timeHourMinute],
            ],
            description: [this.product.description, [Validators.required]],
        });
    }

    getProduct(): Product {
        if (this.form.valid) {
            return {
                ...this.form.getRawValue(),
                version: this.product.version,
                startDateTime: this.getDate(this.form.get('startDate').value, this.form.get('startTime').value),
                endDateTime: this.getDate(this.form.get('endDate').value, this.form.get('endTime').value),
            };
        }
    }

    getDate(date: Date, time: string): string {
        if (date && time){
            return `${date.toString()}T${time}`;
        } else {
            let data = new Date();
            return `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}T${data.getHours()}:${data.getMinutes()}`;
        }
    }
}
