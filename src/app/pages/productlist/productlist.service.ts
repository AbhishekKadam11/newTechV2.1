import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class ProductListService {

  public productData: any;
  constructor(private http: Http) {

  }

  productListData(ptype) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
      //   'http://localhost:8080/api/productList/' + ptype,
         'https://newtechserver.herokuapp.com/api/productList/' + ptype,
        {headers},
      )
      .map(res => res.json())
      .map((res) => {
      //  this.setProductData(res);
          return res;

      });
  }

  public setProductData(data) {
    this.productData = data;
  }
 // productData: any = ['1','2','3'];
  public getproductData() {
  //  this.productData = ['1','2','5'];
    return this.productData;
  }


}
