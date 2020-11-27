import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Product } from 'src/app/main/store/product/model/product';
import { ProductsService } from '../products.service';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  showMoreDisabled = false;
  isLoadingBtn = false;
  currentFilters: any = {};
  sellerLink = '';
  currentPage = 1;
  items: Product[] = null;

  confirm: PoModalAction = {
    action: () => {
      navigator.clipboard.writeText(this.sellerLink);
      this.poModal.close();
      this.notificationService.success('link copiado!');
    },
    label: 'Copiar link',
  };

  constructor(
    private router: Router,
    private productsService: ProductsService,
    protected notificationService: PoNotificationService,
    ) { }

  ngOnInit(): void {
    this.loadItems();
  }

  private updateData(): void {
    this.isLoadingBtn = true;
    this.productsService.find(this.currentPage, this.currentFilters.search)
      .pipe(finalize(() => this.isLoadingBtn = false))
      .subscribe(
        list => {
          this.showMoreDisabled = !list.hasNext;
          if (this.items) {
            this.items.push(...list.items);
          } else {
            this.items = list.items;
          }
        },
      );
  }

  loadItems(): void {
    this.items = null;
    this.currentPage = 1;
    this.updateData();
  }

  handleQuickSearch(searchValue: string): void {
    searchValue ? this.currentFilters.search = searchValue : delete this.currentFilters.search;
    this.loadItems();
  }

  handleChangeDisclaimers(disclaimers: any[]): void {
    this.currentFilters = {};
    disclaimers.forEach(disclaimer => this.currentFilters[disclaimer.property] = disclaimer.value);
    this.loadItems();
  }

  showMore(): void {
    this.currentPage++;
    this.updateData();
  }

  openModal(sellerLink: string): void {
    this.sellerLink = sellerLink;
    this.poModal.open();
  }

  closeModal(): void {
    this.poModal.close();
  }

  copy(): void {

  }
}
