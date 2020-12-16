import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { filter, tap } from 'rxjs/operators';
import { Company } from '../../model/company';
import { User } from '../../model/user';
import { CompaniesService } from '../../companies.service';
import { AddressApiResponse } from '../../model/address-api-response';
import { RoleType } from 'src/app/core/auth/model/role-type';

@Component({
    templateUrl: './company-new.component.html',
})
export class CompanyNewComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
    }
}
