import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from './product-service.service';

 @Component({
  selector: 'app-product-com',
  templateUrl: './product-com.component.html',
  styleUrls: ['./product-com.component.css']
})
export class ProductComComponent {
  products:Product[];
  constructor( private ProductServiceService:ProductServiceService
    )
  { }
  getProducts()
  {
    this.products=this.ProductServiceService.getProductList();
  }
}
