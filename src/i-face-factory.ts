import { Button } from './i-face-button';
import { CustomerSelect } from './i-face-customer';
import { ProductSelect } from './i-face-product';

export interface UiFactory{
  createButton: ()=> Button;
  createCustomerSelect:()=>CustomerSelect;
  createProductSelect:()=>ProductSelect
}
