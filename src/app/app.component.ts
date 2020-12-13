import { Component } from '@angular/core';
import { Product } from './_model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productShopingList: Product[] = [];
  addToShopingList(product: Product): void{
     this.productShopingList.push(product);
  }
}
