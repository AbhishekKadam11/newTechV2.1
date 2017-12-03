import { AfterViewInit, Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';



@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-sidebarmenues',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit, OnInit {
  // message: string = 'Hola Mundo!';
  title: string;
  productType: string;
  products: any;
  menu: any;


  // public listofMenues: Subscription;
  // public menus;

//  @ViewChild(ProductlistComponent) listComponent: ProductlistComponent;

  constructor() {
    // this.listofMenues = this.productListService.productListData('Motherboard')
    //  .subscribe((sidebar) => {
    //   console.log(sidebar);
    //    this.menus = sidebar;
    //  });
  }

  public menuType(menus) {
    this.menus = menus;
    console.log(this.menus);
  }

  ngAfterViewInit() {

  }
  menus: any;
  test: any = 20;
  ngOnInit() {
    //  this.menus = this.listComponent.show();
  //  this.test = this.listComponent.setSidebarMenu();
    console.log(this.test);
  }

  getmenus(val) {
    this.test = val;
  }

}
