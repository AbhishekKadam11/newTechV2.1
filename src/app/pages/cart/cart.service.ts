import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CartService {
  constructor(private http: Http) {

  }
  Products = [];
  private cartSubject = new Subject();
  CartState = this.cartSubject.asObservable();
  public cart: any = {};

  getCartItems() {
    return this.cart = localStorage.getItem('cart');
  }

  addProduct(product: any) {
    this.Products.push(product);
    localStorage.setItem('cart', JSON.stringify(this.Products));
    this.cartSubject.next({loaded: true, products: this.Products});
  //  console.log(this.Products);
  }
  // removeProduct(id:number) {
  //   this.Products = this.Products.filter((_item) =>  _item.id !== id );
  //   this.cartSubject.next(<CartState>{loaded: false , products:  this.Products});
  // }

  // getAllProducts() : Observable <any> {
  //   // return this.httpclient.get(url).map((res : Response) => res.json())
  //   //   .catch((error : any) => Observable.throw('Server error'));
  // }


}
