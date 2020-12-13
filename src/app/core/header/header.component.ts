import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../_model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() shopingItems: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
