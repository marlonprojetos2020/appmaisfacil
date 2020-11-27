import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Role} from '../../../../core/auth/model/role';
import {RoleService} from '../services/role.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RolesResolver implements Resolve<Role> {
    constructor(private roleService: RoleService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.roleService.list();
    }
}
