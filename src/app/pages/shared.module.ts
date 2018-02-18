import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../pages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
  ],
  providers: [

  ],
})
export class SharedModule { }
