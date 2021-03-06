import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CompanyDetailService} from './company-detail.service';
import {User} from '../model/user';

@Injectable({
    providedIn: 'root',
})
export class CompanyDetailResolver implements Resolve<Observable<User>>{

    constructor(private companyDetailService: CompanyDetailService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<User> | Observable<Observable<User>> | Promise<Observable<User>> {
        return this.companyDetailService.getUserCompany(route.params.id);
    }
}
