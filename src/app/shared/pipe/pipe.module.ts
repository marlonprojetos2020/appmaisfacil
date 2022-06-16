import { NgModule } from '@angular/core';
import { CpfCnpjPipe } from './cpfcnpj-pipe/cpfcnpj.pipe';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone-pipe/phone.pipe';

@NgModule({
    declarations: [CpfCnpjPipe, PhonePipe],
    imports: [CommonModule],
    exports: [CpfCnpjPipe, PhonePipe],
})
export class PipeModule {}
