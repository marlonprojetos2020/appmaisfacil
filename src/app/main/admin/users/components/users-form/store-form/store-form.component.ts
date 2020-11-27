import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreForm} from './store-form';
import {PoSelectOption} from '@po-ui/ng-components';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-store-form',
    templateUrl: './store-form.component.html',
    styleUrls: ['./store-form.component.scss'],
})
export class StoreFormComponent implements OnInit {

    @Output() formChange = new EventEmitter<FormGroup>();
    @Input() store: StoreForm;
    @Input() storeCategories: PoSelectOption[];

    form: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
    ) {
        this.storeCategories = this.activatedRoute.snapshot.data.storeCategories
            .map(storeCategory => ({value: storeCategory.id, label: storeCategory.name}));
    }

    ngOnInit(): void {
        this.store = this.store ? this.store : {} as StoreForm;
        this.form = this.formBuilder.group({
            socialReason: [this.store.socialReason],
            storeCategory: this.formBuilder.group({
                id: [this.store.storeCategory && this.store.storeCategory.id],
            }),
            openingHours: [this.store.openingHours, [Validators.required]],
        });

        this.formChange.emit(this.form);
    }

}
