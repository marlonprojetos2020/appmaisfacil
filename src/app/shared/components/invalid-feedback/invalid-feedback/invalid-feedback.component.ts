import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
    selector: 'app-invalid-feedback',
    templateUrl: './invalid-feedback.component.html',
    styleUrls: ['./invalid-feedback.component.scss'],
})
export class InvalidFeedbackComponent implements OnInit {

    @Input() hasError = false;
    @Input() formCtrl: AbstractControl | FormControl;
    @Input() errorCode: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
