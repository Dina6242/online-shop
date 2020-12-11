import { Component, OnInit } from '@angular/core';
import { Product } from '../../../_model/product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products: Product[];
  constructor(){
    this.products = [
      {title: 'camera', price: 300 , discount: 20 , imageUrl: 'assets/img/products/product-grey-2.jpg'},
      {title: 'Tv', price: 400 , discount: 50 , imageUrl: 'assets/img/products/product-grey-2.jpg'},
      {title: 'Cd', price: 500 ,  imageUrl: 'assets/img/products/product-grey-2.jpg'},
      {title: 'Car', price: 3000 , discount: 40 , imageUrl: 'assets/img/products/product-grey-2.jpg'},
      {title: 'Fan', price: 200 ,  imageUrl: 'assets/img/products/product-grey-2.jpg'},
      {title: 'Radio', price: 400 ,  imageUrl: 'assets/img/products/product-grey-2.jpg'},
      {title: 'Mobile', price: 350 , discount: 10 , imageUrl: 'assets/img/products/product-grey-2.jpg'},
      {title: 'phone', price: 150 ,  imageUrl: 'assets/img/products/product-grey-2.jpg'},
      {title: 'ctesr', price: 200 , discount: 30 , imageUrl: 'assets/img/products/product-grey-2.jpg'},
    ];
  }

  ngOnInit(): void {
  }

}
