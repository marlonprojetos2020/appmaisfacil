import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

    @Input() message: string;
    @Input() type: 'INFO' | 'WARNING' | 'SUCCESS' | 'DANGER';

    constructor() {
    }

    ngOnInit(): void {
    }

}
