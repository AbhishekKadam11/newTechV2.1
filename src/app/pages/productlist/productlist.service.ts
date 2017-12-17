import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductListService {

  public productData: any;
  constructor(private http: Http) {

  }

  private notify = new Subject();
  notifyObservable$ = this.notify.asObservable();

  productListData(ptype, selectedChoices?) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
       // 'http://localhost:8080/api/productList/' + ptype + '/' + selectedChoices,
           'https://newtechserver.herokuapp.com/api/' + ptype + '/' + selectedChoices,
        {headers},
      )
      .map(res => res.json())
      .map((res) => {
        this.notify.next(res);
        return res;
      });
  }

  public setProductData(data) {
    this.notify.next(data);
    this.productData = data;
  }

  public getproductData() {

    return this.productData;
  }


}
