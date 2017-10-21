import {Component, OnInit} from '@angular/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
import {FileHolder} from '../../../../node_modules/angular2-image-upload/lib/image-upload/image-upload.component';
import './ckeditor.loader';
import 'ckeditor';

import {ProductService} from './product.service'

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  public product: any = {};  // model
  category: any[];
  brand: any[];
  public pathToName: string = 'name';
  productimages: Array<string> = [];
  private savedSuccess: boolean = false;
  private saveUnsuccess: boolean = false;
  dateOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
  };

  constructor(private productService: ProductService) {
    this.productService.productDropdownData().subscribe((result) => {
      this.category = result['category'];
      this.brand = result['brand'];
    });
  }

  ngOnInit() {
  }


  imageUploaded(file: FileHolder) {
    const image = file.serverResponse['_body'];
    this.productimages.push(image);
  }

  onRemoved(file: FileHolder) {
    console.log(file);
  }


  onSelectCategory($event) {
    this.product['category'] = $event['text'];
  }

  onSelectBrand($event) {
    this.product['brand'] = $event['text'];
  }

  setProduct() {

    if (this.productimages.length !== 0) {
      this.product['productimgs'] = this.productimages;
    }
    if (this.product.arrivaldate) {
      this.product['arrivaldate'] = this.product.arrivaldate['jsdate'];
    } else {
      this.product['arrivaldate'] = this.product.arrivaldate;
    }

    this.productService.newProductAdd(this.product) .subscribe((result) => {
      this.savedSuccess = true;
      setTimeout(() => {
        this.savedSuccess = false;
      }, 3000);
    }, (err) => {
      this.saveUnsuccess = true;
      setTimeout(() => {
        this.saveUnsuccess = false;
      }, 3000);
    });

  }


}