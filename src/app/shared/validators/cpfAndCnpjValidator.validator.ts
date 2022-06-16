import { AbstractControl } from '@angular/forms';
import { cpfValidator } from './cpfValidator.validator';
import { cnpjValidator } from './cnpjValidator.validator';

export function cpfAndcnpjValidator(control: AbstractControl) {

    if (cpfValidator(control) === null || cnpjValidator(control) === null) {
        return null;
    } else {
        return { documentoInvalido: true };
    }
}
