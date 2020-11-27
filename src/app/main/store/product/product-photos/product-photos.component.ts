import {Component, OnInit} from '@angular/core';
import {PoUploadFileRestrictions} from '@po-ui/ng-components';
import {ProductPhoto} from './product-photo';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../model/product';
import {environment} from '../../../../../environments/environment';
import {HttpResponse} from '@angular/common/http';
import {ProductPhotoService} from './product-photo.service';

@Component({
    selector: 'app-product-photos',
    templateUrl: './product-photos.component.html',
    styleUrls: ['./product-photos.component.scss'],
})
export class ProductPhotosComponent implements OnInit {

    maxPhotos = 6;

    urlUploadProductPhoto: string;
    delete: () => void;

    restrictions: PoUploadFileRestrictions;

    product: Product;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productPhotoService: ProductPhotoService,
    ) {
    }

    ngOnInit(): void {
        this.product = this.activatedRoute.snapshot.data.product;

        this.restrictions = {
            allowedExtensions: ['.png', '.jpg', '.jpeg'],
            maxFileSize: 5242880,
            maxFiles: this.maxFiles(),
        };

        this.urlUploadProductPhoto = `${environment.apiUrl}/products/store/${this.product.id}/photos`;
    }

    success(result: HttpResponse<ProductPhoto>): void {
        this.product.productPhotos.push(result.body);
        this.restrictions.maxFiles = this.maxFiles();
    }

    help(): string {
        return this.maxFiles() ?
            `As imagens serão cortadas em 1080px por 1080px.` :
            'Limite de 6 fotos atingido';
    }

    private maxFiles(): number {
        return this.maxPhotos - this.product.productPhotos.length;
    }

    deletePhoductPhoto(productPhoto: ProductPhoto): void {
        this.productPhotoService.deleteProductPhoto(this.product.id, productPhoto.id)
            .subscribe(() => this.product.productPhotos = this.product.productPhotos.filter(item => item !== productPhoto));
    }
}
