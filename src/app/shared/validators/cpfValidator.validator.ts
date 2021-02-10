import { AbstractControl } from '@angular/forms';

export function cpfValidator(control: AbstractControl) {
    let Soma;
    let Resto;
    Soma = 0;

    if (!control.value) {
        return null;
    }

    if (control.value === '00000000000') {
        return { cpfInvalido: true };
    }

    for (let i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(control.value.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
        Resto = 0;
    }

    if (Resto !== parseInt(control.value.substring(9, 10))) {
        return { cpfInvalido: true };
    }

    Soma = 0;
    for (let i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(control.value.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
        Resto = 0;
    }
    if (Resto !== parseInt(control.value.substring(10, 11))) {
        return { cpfInvalido: true };
    }
    return null;
}

