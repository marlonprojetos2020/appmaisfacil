import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card-service',
    templateUrl: './card-extra-service.component.html',
    styleUrls: ['./card-extra-service.component.scss'],
})
export class CardExtraServiceComponent {
    @Input() title: string  = '';
    @Input() description: string = '';
    @Input() price: string = '';
    @Input() deadline: string = '';
    background: boolean = true;
}
