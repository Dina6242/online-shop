import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../../_model/product';
import { LangService } from '../../lang/lang.service';
import { Lang } from '../../../_model/lang';
import { PaymentTypeService } from '../../payment-type/payment-type.service';
import { ProductCategory } from '../../../_model/product-category';
import { PaymentType } from '../../../_model/payment-type';
import { ProductCategoryService } from '../../product-category/product-category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product: Product = {price: 0};
  langs: Lang[];
  paymentType: PaymentType[];
  categories: ProductCategory[];
  currentLang = 0;

  // @ViewChild('txtName', {static: false}) txtName: ElementRef;
  constructor(private langService: LangService,
              private  paymentTypeService: PaymentTypeService,
              private productCategory: ProductCategoryService) {
  }

  ngOnInit(): void {
    this.langs = this.langService.gatAll();
    this.paymentType = this.paymentTypeService.getAll();
    this.categories = this.productCategory.gatAll();
    this.product.category = {};
    this.product.paymentType = [];
    this.product.tags = [];
    this.product.data = [];
    for (const lang of this.langs) {
      this.product.data.push({});
    }
  }

  onSubmit(myForm: NgForm): void {
    console.log(this.product);
    // console.log(myForm);
    // const product: Product = {
    //  data : [{title: myForm.value.textName , description: myForm.value.textDescription  }]
    // };
  }

  onPaymentTypeChecked(event: MouseEvent): void {
    const checkbox = event.target as HTMLInputElement;
    const id = +checkbox.value;
    if (checkbox.checked) {
      this.product.paymentType?.push({id});
    } else {
      this.product.paymentType?.splice(this.product.paymentType.findIndex(a => a.id === id), 1);
    }
  }

  onAddTag(txtTag: HTMLInputElement): void {
    this.product.tags?.push({title: txtTag.value});
    txtTag.value = '';
  }
}
