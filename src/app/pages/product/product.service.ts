import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class ProductService {
  constructor(private http: Http) {

  }

  productDropdownData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(
      //   'http://localhost:8080/api/productDropdownData',
        'https://newtechserver.herokuapp.com/api/productDropdownData',
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

  productCategory(values) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
    //     'http://localhost:8080/api/productCategory',
        'https://newtechserver.herokuapp.com/api/productCategory',
        JSON.stringify({data: values}),
        {headers},
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          console.log(res);
        }

        return res.success;
      });
  }

  newProductAdd(values) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
       //  'http://localhost:8080/api/newProduct',
        'https://newtechserver.herokuapp.com/api/newProduct',
        JSON.stringify({data: values}),
        {headers},
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          console.log(res);
        }

        return res.success;
      });
  }

}
