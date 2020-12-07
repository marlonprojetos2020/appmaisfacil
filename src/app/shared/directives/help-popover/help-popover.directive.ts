import { ContentChildren, Directive, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild } from '@angular/core';

@Directive({
    selector: '[appHelpPopOver]',
})
export class HelpPopoverDirective implements OnInit {

    @Input() helpText: string;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        console.log(this.el.nativeElement);
    }

    @HostListener('mouseenter') onMouseEnter() {

    }

    @HostListener('mouseleave') onMouseLeave() {
        // console.log('saiu');
    }

    // po-page-header
    // po-page-header-title
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
