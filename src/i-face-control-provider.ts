import { Button } from './i-face-button';
import { CustomerSelect } from './i-face-customer';
import { ProductSelect } from './i-face-product';

export interface ControlProvider {
  (type: 'button'): Button;
  (type: 'customer'): CustomerSelect;
  (type: 'product'): ProductSelect;
}
