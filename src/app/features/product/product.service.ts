import { Injectable } from '@angular/core';
import { Product } from '../../_model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      data: [{title: 'camera', lang: {id: 1}}],
      price: 300,
      discount: 20,
      imageUrls: ['assets/img/products/product-grey-2.jpg'],
      category: {id: 2},
      paymentType: [{id: 3}]
    },
    {id: 2, data: [{title: 'Tv'}], price: 400, discount: 50, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
    {id: 3, data: [{title: 'Cd'}], price: 500, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
    {id: 4, data: [{title: 'Car'}], price: 3000, discount: 40, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
    {id: 5, data: [{title: 'Fan'}], price: 200, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
    {id: 6, data: [{title: 'Radio'}], price: 400, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
    {id: 7, data: [{title: 'Mobile'}], price: 350, discount: 10, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
    {id: 8, data: [{title: 'phone'}], price: 150, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
    {id: 9, data: [{title: 'tesr'}], price: 200, discount: 30, imageUrls: ['assets/img/products/product-grey-2.jpg'], category: {}},
  ];
  shopingList: Product[] = [];

  constructor() {
  }

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find(a => a.id === id);
  }

  add(product: Product): void {
    product.id = this.products.length + 1;
    this.products.push(product);
    console.log(this.products);
  }

  save(product: Product): void {
    const index = this.products.findIndex(a => a.id === product.id);
    this.products[index] = product;
  }

  delete(id: number): void {
    const index = this.products.findIndex(a => a.id === id);
    this.products.splice(index, 1);
  }
}
