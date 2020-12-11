import { Component, Input } from '@angular/core';
import { Product } from '../../../_model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor() {}

  getPrice(): number{
   return this.product.discount ? this.product.price - this.product.discount : this.product.price;
  }
}
