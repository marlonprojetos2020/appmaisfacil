import {NgModule} from '@angular/core';
import {CompanyInvoiceIssueNoteComponent} from './company-invoice-issue-note/company-invoice-issue-note.component';
import {CommonModule} from '@angular/common';
import {PoContainerModule, PoPageModule} from '@po-ui/ng-components';

@NgModule({
    imports: [CommonModule, PoPageModule, PoContainerModule],
    declarations: [CompanyInvoiceIssueNoteComponent],
})
export class CompanyInvoiceIssueNoteModule {
}
