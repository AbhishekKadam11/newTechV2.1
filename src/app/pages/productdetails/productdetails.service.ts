import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions} from '@angular/http';


@Injectable()
export class ProductDetailsService {
  constructor(private http: Http) {

  }

  productDescriptionData(pid) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
         //'http://localhost:8080/api/productDescriptionData/' + pid,
        'https://newtechserver.herokuapp.com/api/productDescriptionData/' + pid,
        {headers},
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          return res.success;
        } else {
          return res;
        }

      });
  }

}
