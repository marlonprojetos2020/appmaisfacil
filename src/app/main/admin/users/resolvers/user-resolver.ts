import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Role} from '../../../../core/auth/model/role';
import {Observable} from 'rxjs';
import {UsersService} from '../services/users.service';

@Injectable({
    providedIn: 'root',
})
export class UserResolver implements Resolve<Role> {

    constructor(private usersService: UsersService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.usersService.find(parseInt(route.paramMap.get('id'), 0));
    }
}
