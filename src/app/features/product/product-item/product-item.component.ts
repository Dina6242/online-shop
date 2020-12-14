import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../_model/product';
import { getProductPrice } from '../../../_utilitites/utilitites';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output()itemAdded = new  EventEmitter<Product>();
  constructor(public productservice: ProductService ) {}

  getPrice(): number{
    return getProductPrice(this.product);
  }
  onItemAdding(): void{
    // save on database
    this.itemAdded.next(this.product);
    this.productservice.shopingList.push(this.product);

  }
}
