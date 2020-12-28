import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../_model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  @Input() products: Product[];
  @Output() oneItemAdded = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    if (!this.products) {
      this.products = this.productService.getAll();
    }
  }

  onOneItemAdded(pro: Product): void {
    this.oneItemAdded.next(pro);
  }
}
