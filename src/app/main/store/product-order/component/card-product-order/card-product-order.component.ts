import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProductOrder } from '../../model/product-order';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { ProductOrderService } from '../../product-order.service';


@Component({
  selector: 'app-card-product-order',
  templateUrl: './card-product-order.component.html',
  styleUrls: ['./card-product-order.component.scss']
})
export class CardProductOrderComponent implements OnInit {

  @Input() productOrder: ProductOrder;
  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @Output() visible: EventEmitter<any> = new EventEmitter();

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true,
  };

  confirm: PoModalAction = {
    action: () => {
      this.productOrderService.finishOrder(this.productOrder.id).subscribe(
        () => {
          this.poNotification.success('Entrega Confirmada');
          this.visible.emit(this.productOrder.id);
          this.closeModal();
        },
      );
    },
    label: 'Entregar',
  };

  constructor(
    public poNotification: PoNotificationService,
    public productOrderService: ProductOrderService,
  ) { }

  ngOnInit(): void {}

  openModal(): void {
    if (this.productOrder.paymentStatus === `paid` && this.productOrder.delivered === false) {
      this.poModal.open();
    }
  }

  closeModal(): void {
    this.poModal.close();
  }


}
