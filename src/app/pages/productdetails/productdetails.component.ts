import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductDetailsService } from './productdetails.service'
import { StateService } from '../../../app/@core/data/state.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {

  productid: string;
  product;
  starRate: number = 4;
  brand;
  title;
  price;
  modalno;
  shortdescription;
  fulldescription;
  image;
  productimages;

  constructor(private route: ActivatedRoute, private router: Router,
              private productdetailsaervice: ProductDetailsService,
              protected stateService: StateService,
              private cdRef: ChangeDetectorRef) {

    this.stateService.setSidebarState(this.stateService.sidebars[2]);

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productid = params['productId'];
    });

    this.productdetailsaervice.productDescriptionData(this.productid).subscribe((result) => {
     // console.log(result);
      this.brand = result['data']['brand'];
      this.title = result['data']['title'];
      this.price = result['data']['price'];
      this.modalno = result['data']['modalno'];
      this.shortdescription = result['data']['shortdescription'];
      this.fulldescription = result['data']['fulldescription'];
      this.image = result['image'];
      this.productimages = result['imagearray'];
    }, (err) => {
      console.log(err);
    });

  }

  showimage(index): void {
   // this.image = '';
    let keepGoing = true;

    this.productimages.forEach(function (val, key) {

      if (keepGoing) {
        if (key === index ) {
      //    console.log(val.toString());
          this.image = val.toString();

          keepGoing = false;
        }
      }

    })

  }

}
