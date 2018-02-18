/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
    console.log(((window.location.href).substr(0, 4 ) === 'http') ? 'http://localhost:8080/uploads/' :
      'https://newtech2.herokuapp.com/');
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
