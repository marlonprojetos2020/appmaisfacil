import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProfileService} from '../../admin/profile-admin/profile.service';
import {User} from '../../admin/users/user';

@Injectable({
    providedIn: 'root',
})
export class ProfileStoreResolver implements Resolve<User> {

    constructor(
        private profileService: ProfileService,
    ) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.profileService.profile();
    }
}
