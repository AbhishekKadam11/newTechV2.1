import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  public cartData: any = {};
  public total: number;

  constructor(private  cartservice: CartService) {

  }

  ngOnInit() {
    this.cartData = this.cartservice.getCartItems() ? JSON.parse(this.cartservice.getCartItems()) : undefined ;
    this.getTotalAmmount();
  }

  getcartData(cartData) {

  }

  addQuantity(item) {
    this.cartData.forEach(function (value)  {
        if ( value['id'] === item['id']) {
          ++value['quantity'];
          value['price'] = item['baseprice'] * value['quantity'];
        }
    });
    this.getTotalAmmount();
  }

  decressQuantity(item) {
    this.cartData.forEach(function (value)  {
      if ( value['id'] === item['id']) {
        --value['quantity'];
        value['price'] = value['price'] - item['baseprice'];

      }
    });
    this.getTotalAmmount();
  }
  getTotalAmmount() {
   // this.total = 0;
    let total: number = 0;
    this.cartData.forEach(function (value)  {
     // console.log( Number(this.total || 0) + Number.parseInt( value['price'].toString()));
         total += value['price'];
    });
    this.total = total;
  }

  removeItem(index) {
    this.cartservice.removeProduct(index);
    this.cartData.splice(index, 1);
    this.getTotalAmmount();
  }

}
