import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductlistRoutingModule, routedComponents } from './productlist-routing.module';
import { ProductListService } from './productlist.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

// import { MenuComponent } from '../../../app/@theme/layouts/sidebarmenus/sidebarmenus'

@NgModule({
  imports: [
    ThemeModule,
    ProductlistRoutingModule,
  ],
  declarations: [
    ...routedComponents,
 //   SidebarComponent,
  ],
  providers: [ProductListService],

})
export class ProductlistModule { }
