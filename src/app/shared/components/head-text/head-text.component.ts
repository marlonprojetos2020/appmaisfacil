import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
    selector: 'app-head-text',
    templateUrl: './head-text.component.html',
    styleUrls: ['./head-text.component.scss'],
})
export class HeadTextComponent {

    @Input() helpText = '';
    @ViewChild('buttonHover', { read: ElementRef, static: true }) buttonHoverRef: ElementRef;

}
