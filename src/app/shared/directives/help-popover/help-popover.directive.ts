import {
    AfterViewInit,
    ElementRef,
    Input,
    Renderer2,
    ViewChild,
    Directive,
} from '@angular/core';
import { PoDialogAlertOptions, PoDialogService, PoModalComponent } from '@po-ui/ng-components';

@Directive({
    selector: '[appHelpPopOver]',
})
export class HelpPopoverDirective implements AfterViewInit {

    @Input() helpText: string;

    title = '';

    pageHeaderElement: any;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private poDialogService: PoDialogService,
    ) {}

    ngAfterViewInit(): void {
        this.pageHeaderElement = this.el.nativeElement
            .querySelector('.po-page-header-title');
        this.title = this.pageHeaderElement.textContent;
        this.pageHeaderElement.addEventListener('click', this.showPopover.bind(this));
    }

    private showPopover(): void {
        const alertOptions: PoDialogAlertOptions = {
            title: this.title,
            message: this.helpText,
        };
        this.poDialogService.alert(alertOptions);
    }
}
