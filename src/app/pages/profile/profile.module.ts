import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileRoutingModule, routedComponents } from './profile-routing.module';
import { ProfileService } from './profile.service';
//import { NgUploaderModule } from 'ngx-uploader';
// import { UserService } from './user.service';

@NgModule({
  imports: [
    ThemeModule,
    ProfileRoutingModule,
 //   NgUploaderModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [ProfileService],

})
export class ProfileModule { }
