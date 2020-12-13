import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../_model/product';
import { getProductPrice } from '../../_utilitites/utilitites';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
    @Input() shopingList: Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  getPrice(product: Product): number{
    return getProductPrice(product);
  }

}
