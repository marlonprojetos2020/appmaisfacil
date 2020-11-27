import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductPhoto} from '../product-photo';
import {PoDialogService} from '@po-ui/ng-components';

@Component({
    selector: 'app-product-photos-gallery',
    templateUrl: './product-photos-gallery.component.html',
    styleUrls: ['./product-photos-gallery.component.scss'],
})
export class ProductPhotosGalleryComponent implements OnInit {

    @Input() productPhotos: ProductPhoto[];

    @Output() delete = new EventEmitter<ProductPhoto>();

    constructor(
        private poDialog: PoDialogService,
    ) {
    }

    ngOnInit(): void {
    }

    deleteProductPhoto(productPhoto: ProductPhoto): void {
        this.poDialog.confirm({
            confirm: () => this.delete.emit(productPhoto),
            message: 'Tem certeza que deseja remover essa foto do produto?',
            title: 'Remover foto',
        });
    }
}
