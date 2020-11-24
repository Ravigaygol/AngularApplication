import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

/*   @Input() product:Product;
  @Output() productSearch:EventEmitter<Product>=new EventEmitter<Product>();
 */  constructor() { }
  ngOnInit(): void {}
/*   search()
  {
    this.productSearch.emit(this.product);
  }
 */
msg:string;
  flag:boolean;
  flag1:boolean;
 
  onNotify(flag:boolean):void
  {
    this.flag=true;
    if(this.flag==flag)
    {
      this.flag1=true;
      console.log(this.flag);
    }
    else
    {
      this.flag=false;
      this.flag1=true;
      console.log(this.flag);
    }
    
  }

}
