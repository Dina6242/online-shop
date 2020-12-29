import { Component, OnInit } from '@angular/core';
import { Product } from '../../../_model/product';
import { LangService } from '../../lang/lang.service';
import { Lang } from '../../../_model/lang';
import { PaymentTypeService } from '../../payment-type/payment-type.service';
import { ProductCategory } from '../../../_model/product-category';
import { PaymentType } from '../../../_model/payment-type';
import { ProductCategoryService } from '../../product-category/product-category.service';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product: Product = {data: [], price: 0, category: {}};
  price = new FormControl();
  myForm: FormGroup;
  langs: Lang[];
  paymentType: PaymentType[];
  categories: ProductCategory[];
  currentLang = 0;
  productId: number;

  constructor(private productService: ProductService,
              private langService: LangService,
              private  paymentTypeService: PaymentTypeService,
              private productCategory: ProductCategoryService,
              private router: Router,
              private activatedRout: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      data: new FormArray([]),
      imageUrls: new FormArray([]),
      price: this.price,
      discount: new FormControl(),
      paymentTypes: new FormArray([]),
      category: new FormControl(),
      tags: new FormArray([]),
    });


    // this.productId = +this.activatedRout.snapshot.params.id;
    // this.langs = this.langService.gatAll();
    // this.paymentType = this.paymentTypeService.getAll();
    // this.categories = this.productCategory.gatAll();
    // if (this.productId){
    //   this.product = this.productService.getById(this.productId);
    // }else {
    //   this.product.category = {};
    //   this.product.paymentType = [];
    //   this.product.tags = [];
    //   this.product.data = [];
    //   for (const lang of this.langs) {
    //     this.product.data.push({});
    //   }
    // }
  }

  onSubmit(): void {
    this.productService.add(this.product);
    this.router.navigate(['/product-listing']);

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
