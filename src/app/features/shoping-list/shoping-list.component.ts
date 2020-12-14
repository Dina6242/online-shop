import { Component, OnInit } from '@angular/core';
import { Product } from '../../_model/product';
import { getProductPrice } from '../../_utilitites/utilitites';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
    shopingList: Product[] = [];
  constructor(public productservice: ProductService) {
  }

  ngOnInit(): void {
    this.shopingList = this.productservice.shopingList;
  }
  getPrice(product: Product): number{
    return getProductPrice(product);
  }

}
