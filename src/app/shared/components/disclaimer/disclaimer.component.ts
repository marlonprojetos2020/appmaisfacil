import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-disclaimer',
    templateUrl: './disclaimer.component.html',
    styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent {
    @Input() disclaimerTitle: string = 'Contabilidade';

    @Input() disclaimerTextSuccess: string = '';

    @Input() disclaimerTextWarning: string = '';

    @Input() isSuccess: boolean = false;
}
