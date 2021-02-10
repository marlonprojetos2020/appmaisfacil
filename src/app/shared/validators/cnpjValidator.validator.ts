import { AbstractControl } from '@angular/forms';

export function cnpjValidator(control: AbstractControl) {
    let tamanho;
    let numeros;
    let digitos;
    let soma;
    let pos;
    let resultado;

    if (!control.value) {
        return null;
    }

    // LINHA 10 - Elimina CNPJs invalidos conhecidos
    if (
        control.value === '00000000000000' ||
        control.value === '11111111111111' ||
        control.value === '22222222222222' ||
        control.value === '33333333333333' ||
        control.value === '44444444444444' ||
        control.value === '55555555555555' ||
        control.value === '66666666666666' ||
        control.value === '77777777777777' ||
        control.value === '88888888888888' ||
        control.value === '99999999999999'
    ) {
        return { cnpjInvalido: true };
    } // LINHA 21

    // // Valida DVs LINHA 23 -
    tamanho = control.value.length - 2;

    numeros = control.value.substring(0, tamanho);
    digitos = control.value.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado.toString() !== digitos.charAt(0)) {
        return { cnpjInvalido: true };
    }

    tamanho = tamanho + 1;

    numeros = control.value.substring(0, tamanho);

    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado.toString() !== digitos.charAt(1)) {
        return { cnpjInvalido: true };
    } // LINHA 49

    return null; // LINHA 51
}
