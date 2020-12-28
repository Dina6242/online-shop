import { Injectable } from '@angular/core';
import { Product } from '../../_model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products: Product[] = [
   {data: [{title: 'camera'}], price: 300, discount: 20, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
   {data: [{title: 'Tv'}], price: 400, discount: 50, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
   {data: [{title: 'Cd'}], price: 500, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
   {data: [{title: 'Car'}], price: 3000, discount: 40, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
   {data: [{title: 'Fan'}], price: 200, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
   {data: [{title: 'Radio'}], price: 400, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
   {data: [{title: 'Mobile'}], price: 350, discount: 10, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
   {data: [{title: 'phone'}], price: 150, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
   {data: [{title: 'tesr'}], price: 200, discount: 30, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
 ];
 shopingList: Product[] = [];
  constructor() { }
  getAll(): Product[]{
    return this.products;
  }
}
