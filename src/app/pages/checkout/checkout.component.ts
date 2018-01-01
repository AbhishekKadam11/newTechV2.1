import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  public cartData: any = {};

  constructor(private  cartservice: CartService) {

  }

  ngOnInit() {
    this.cartData = JSON.parse(this.cartservice.getCartItems());

  }

  getcartData(cartData) {

  }

  addQuantity(item) {
    this.cartData.forEach(function (value)  {
        if ( value['id'] === item['id']) {
          ++value['quantity'];
          value['price'] = item['baseprice'] * value['quantity'];

        }
    })
  }

  decressQuantity(item) {
    this.cartData.forEach(function (value)  {
      if ( value['id'] === item['id']) {
        --value['quantity'];
        value['price'] = value['price'] - item['baseprice'];

      }
    })
  }


}
