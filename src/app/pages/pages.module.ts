import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
// import { SidebarmenusComponent } from '../pages/sidebarmenus/sidebarmenus.component';
// import { ProductlistComponent } from './src/app/pages/productlist/productlist.component';
// import { ProductdetailsComponent } from './src/app/pages/productdetails/productdetails.component';
// import { ProductComponent } from './src/app/pages/product/product.component';
// import { ProfileComponent } from './profile/profile.component';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from '../pages/login/login.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  //  SidebarmenusComponent,
 //   ProductlistComponent,
 //   ProductdetailsComponent,
 //   ProductComponent,
  //  ProfileComponent,
    // RegisterComponent,
  //  LoginComponent,
  ],
})
export class PagesModule {
}
