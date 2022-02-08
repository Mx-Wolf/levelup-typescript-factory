import { UiFactory } from './i-face-factory';
import { Button } from './i-face-button';
import { CustomerSelect } from './i-face-customer';
import { ProductSelect } from './i-face-product';

export class Factory implements UiFactory {
  constructor(
    private buttonCtor: new () => Button,
    private customerCtor: new () => CustomerSelect,
    private productCtor: new () => ProductSelect
  ) { }

  button = () => new this.buttonCtor();
  customer = () => new this.customerCtor();
  product = () => new this.productCtor();
}
