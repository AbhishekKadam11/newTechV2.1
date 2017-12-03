import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../app/@core/data/state.service';
import { ProductListService} from '../productlist/productlist.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'ngx-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})

export class ProductlistComponent implements OnInit {
  // message: string = 'Hola Mundo!';
  title: string;
  productType: string;
  products: any;
  menu: any;

  @ViewChild(SidebarComponent) sidebar: SidebarComponent;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productListService: ProductListService,
              private stateService: StateService ) {
    this.stateService.setSidebarState(this.stateService.sidebars[0]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productType = params['productType'];
    });
    this.getProductList();
  }

  getProductList() {
      this.productListService.productListData(this.productType)
        .subscribe((result) => {
          if (result.hasOwnProperty('motherboard')) {
            this.products = result['motherboard'];
            this.title = 'Motherboard';
            this.sidebar.getmenus(result['motherboard']);
          }
          if (result.hasOwnProperty('processor')) {
            this.products = result['processor'];
            this.title = 'Processor';
          }
          if (result.hasOwnProperty('graphiccard')) {
            this.products = result['graphiccard'];
            this.title = 'Graphic Card';
          }
          if (result.hasOwnProperty('router')) {
            this.products = result['router'];
            this.title = 'Router';
          }
        //  console.log( this.products);
        })
  }
  productDetails(productId) {

    this.router.navigate(['/pages/productdetails', productId ]);
    //  this.router.navigateByUrl('pages/productDetails');
  }

  public setSidebarMenu() {
   // this.menu = menus;
    this.products = 20;
    return this.products;
  }
  data = 10;
  hidden = true;
  show() {
    this.hidden = false;
  }
}
