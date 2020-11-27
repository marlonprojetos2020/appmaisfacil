import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class StoreGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAnonymous()) {
            this.router.navigateByUrl('/acessar');
            return false;
        }

        if (!this.authService.isStore()) {
            this.router.navigateByUrl('/vendedor');
            return false;
        }

        return true;
    }

}
