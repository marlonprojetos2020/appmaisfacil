import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Charge } from '../../../../../../../shared/components/charge-form/models/charge';
import { ChargeFormService } from '../../../../../../../shared/components/charge-form/charge-form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'admin-company-edit-charge.component.html',
})
export class AdminCompanyEditChargeComponent implements OnInit {
    charge$: Observable<Charge> = null;

    constructor(
        private chargeFormService: ChargeFormService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.charge$ = this.chargeFormService.getCharge(
            this.activatedRoute.snapshot.params.id
        );
    }
}
