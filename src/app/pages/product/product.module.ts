import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { ThemeModule } from '../../@theme/theme.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProductRoutingModule, routedComponents } from './product-routing.module';
import { ProductService } from './product.service';
import { Select2Component } from 'angular-select2-component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

@NgModule({
  imports: [
    ThemeModule,
    ProductRoutingModule,
    CKEditorModule,
    ImageUploadModule.forRoot(),
    NgxMyDatePickerModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
    Select2Component,
  ],
  providers: [ProductService],

})
export class ProductModule { }
