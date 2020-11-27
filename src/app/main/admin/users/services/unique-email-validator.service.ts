import {Injectable} from '@angular/core';
import {UsersService} from './users.service';
import {AbstractControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay, map, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UniqueEmailValidatorService {

    constructor(
        private usersService: UsersService,
    ) {
    }

    public valid(initialValue?: string): (control: AbstractControl) => Observable<{ uniqueEmail: boolean }> {
        return (control: AbstractControl) =>
            of(control.value)
                .pipe(delay(300))
                .pipe(switchMap(email => initialValue === email ? of(null) : this.usersService.exists(email)))
                .pipe(map(isTaken => isTaken ? {uniqueEmail: true} : null));
    }
}
