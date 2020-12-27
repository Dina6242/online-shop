import { Injectable } from '@angular/core';
import { ProductCategory } from '../../_model/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  productCategories: ProductCategory[] = [
    {id: 1, title: 'Arts & Crafts'},
    {id: 2, title: 'Automotive'},
    {id: 3, title: 'Baby'},
    {id: 4, title: 'Books'},
    {id: 5, title: 'Eletronics'},
    {id: 6, title: 'Women\'s Fashion'},
    {id: 7, title: 'Men\'s Fashion'},
    {id: 8, title: 'Health & Household'},
    {id: 9, title: 'Home & Kitchen'},
    {id: 10, title: 'Military Accessories'},
    {id: 11, title: 'Movies & Television'},
    {id: 12, title: 'Sports & Outdoors'},
    {id: 13, title: 'Tools & Home Improvement'},
    {id: 14, title: 'Toys & Games'},
  ];

  constructor() {
  }

  gatAll(): ProductCategory[] {
    return this.productCategories;
  }
}
