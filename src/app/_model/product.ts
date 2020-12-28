import { Data } from './data';
import { PaymentType } from './payment-type';
import { ProductCategory } from './product-category';
import { Tag } from './tag';
import { Lang } from './lang';

export interface Product {
  data: Data[];
  imageUrls?: string[];
  price: number;
  discount?: number;
  paymentType?: PaymentType[];
  category: ProductCategory;
  tags?: Tag[];
}
