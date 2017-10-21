import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
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
 //   ProductComponent,
  //  ProfileComponent,
    // RegisterComponent,
  //  LoginComponent,
  ],
})
export class PagesModule {
}
