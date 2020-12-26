import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../_model/product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  @Input() products: Product[];
  @Output() oneItemAdded = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
    if (!this.products) {
      this.products = [
        {data: [{title: 'camera'}], price: 300, discount: 20, imageUrls: ['assets/img/products/product-grey-2.jpg']},
        {data: [{title: 'Tv'}], price: 400, discount: 50, imageUrls: ['assets/img/products/product-grey-2.jpg']},
        {data: [{title: 'Cd'}], price: 500, imageUrls: ['assets/img/products/product-grey-2.jpg']},
        {data: [{title: 'Car'}], price: 3000, discount: 40, imageUrls: ['assets/img/products/product-grey-2.jpg']},
        {data: [{title: 'Fan'}], price: 200, imageUrls: ['assets/img/products/product-grey-2.jpg']},
        {data: [{title: 'Radio'}], price: 400, imageUrls: ['assets/img/products/product-grey-2.jpg']},
        {data: [{title: 'Mobile'}], price: 350, discount: 10, imageUrls: ['assets/img/products/product-grey-2.jpg']},
        {data: [{title: 'phone'}], price: 150, imageUrls: ['assets/img/products/product-grey-2.jpg']},
        {data: [{title: 'tesr'}], price: 200, discount: 30, imageUrls: ['assets/img/products/product-grey-2.jpg']},
      ];
    }
  }

  onOneItemAdded(pro: Product): void {
    this.oneItemAdded.next(pro);
  }
}
