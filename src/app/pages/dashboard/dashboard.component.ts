import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service'

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit{
  dashboardProducts;

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.dashboardProductList().subscribe((result) =>{
      this.dashboardProducts = result;
      console.log(result);
    })
  }

  slides: any;

  ngOnInit() {
    this.slides = [
      {
        id: 'slide-1',
        img: {
          url: '../../../assets/images/slides/banner1.jpg',
        }
      },
      {
        id: 'slide-2',
        img: {
          url: '../../../assets/images/slides/banner2.jpg'
        }
      },
      {
        id: 'slide-3',
        img: {
          url: '../../../assets/images/slides/banner3.jpg',
        }
      },
      {
        id: 'slide-4',
        img: {
          url: '../../../assets/images/slides/banner4.jpg',
        }
      },
      {
        id: 'slide-5',
        img: {
          url: '../../../assets/images/slides/banner5.jpg',
        }
      }
    ];
  }

}
