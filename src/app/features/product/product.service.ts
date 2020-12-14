import { Injectable } from '@angular/core';
import { Product } from '../../_model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products: Product[] = [];
 shopingList: Product[] = [];
  constructor() { }
}
