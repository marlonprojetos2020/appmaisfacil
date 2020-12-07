import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';

@Directive({
    selector: '[appHelpPopOver]',
})
export class HelpPopoverDirective implements AfterViewInit {

    @Input() helpText: string;

    pageHeaderElement: any;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngAfterViewInit(): void {
        this.pageHeaderElement = this.el.nativeElement
            .querySelector('.po-page-header');

        this.pageHeaderElement
            .addEventListener('click', this.showPopover.bind(this));
    }

    private showPopover(): void {
        alert(this.helpText);
    }
}
