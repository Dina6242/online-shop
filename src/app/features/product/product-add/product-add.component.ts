import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../../_model/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product: Product ;
 // @ViewChild('txtName', {static: false}) txtName: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm: NgForm): void{
    console.log(myForm);
    // const product: Product = {
    //  data : [{title: myForm.value.textName , description: myForm.value.textDescription  }]
    // };
  }
}
