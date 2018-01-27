import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class DashboardService {
  constructor(private http: Http) {

  }
  dashboardProductList() {
    // return this.http.get('https://newtechserver.herokuapp.com/api/dashboardProductlist')
    return this.http.get('http://localhost:8080/api/dashboardProductlist')
      .map(res => res.json())
      .map((res) => {
        return res;
      })
  }



}
