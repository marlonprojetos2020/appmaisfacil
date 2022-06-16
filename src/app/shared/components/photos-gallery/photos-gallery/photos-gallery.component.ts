import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PoDialogService } from '@po-ui/ng-components';

@Component({
    selector: 'app-photos-gallery',
    templateUrl: './photos-gallery.component.html',
    styleUrls: ['./photos-gallery.component.scss'],
})
export class PhotosGalleryComponent implements OnInit {

    @Input() photos: any[];
    @Output() delete = new EventEmitter<any>();

    constructor(
        private poDialog: PoDialogService,
    ) {
    }

    ngOnInit(): void {
    }

    deleteProductPhoto(productPhoto: any): void {
        this.poDialog.confirm({
            confirm: () => this.delete.emit(productPhoto),
            message: 'Tem certeza que deseja remover essa foto do produto?',
            title: 'Remover foto',
        });
    }
}
