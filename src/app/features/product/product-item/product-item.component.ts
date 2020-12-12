import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../_model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output()itemAdded = new  EventEmitter<Product>();
  constructor() {}

  getPrice(): number{
    return this.product.discount ? this.product.price - this.product.discount : this.product.price;
  }
  onItemAdding(): void{
    // save on database
    this.itemAdded.next(this.product);
  }
}
