import { Injectable } from '@angular/core';
import { PaymentType } from '../../_model/payment-type';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  paymentTypes: PaymentType[] = [
    {id: 1 , title: 'Direct BankTransfare'},
    {id: 2 , title: 'Cheque Payment'},
    {id: 3 , title: 'Paypal'},
    {id: 4 , title: 'Visa'},
    {id: 5 , title: 'Mastercard'},
    {id: 6 , title: 'On Dilivery'},

  ];

  constructor() {}
  getAll(): PaymentType[]{
    return this.paymentTypes;
  }
}
