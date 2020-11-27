import {AbstractControl} from '@angular/forms';

export class CustomValidators {

    public static timeHourMinute(control: AbstractControl): { timeHourMinute: boolean } | null {
        if (/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/.test(control.value) || !control.value) {
            return null;
        }
        return {timeHourMinute: true};
    }
}
