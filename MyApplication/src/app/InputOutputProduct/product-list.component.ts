import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 @Output() p:EventEmitter<boolean>=new EventEmitter<boolean>();
 
products:any[];
  constructor() {
    this.products=[
      {productid:1,
        productname:'Mobile',
        productcolor:'Blue',
        productprice:15000},
        {
          productid:2,
          productname:'Laptop',
          productcolor:'Red',
          productprice:20000
        },
          {
            productid:3,
            productname:'Charger',
            productcolor:'Yellow',
            productprice:300
          },
            {
              productid:4,
              productname:'Watch',
              productcolor:'Pink',
              productprice:650
            },
              {
                productid:5,
                productname:'Tablet',
                productcolor:'Black',
                productprice:50000
              }              
    ] 
    
   }
  ngOnInit(): void {}

/* selectProduct:Product["productname"];
search(searchText:string):any[]
{
  console.log("in a search method"+this.products);
  if(!this.products) return [];
  if(!searchText) return this.products;
  searchText=searchText.toLowerCase();
  return this.products.filter( it => {
    return it.productname.toLowerCase().includes(searchText); 
    
});
}
 */
flag:boolean;
flag1:boolean;
@Input() flag2:boolean;
name:string="";
msg:string="";
temp: any;

getValue(e:any) {
 this.temp = e.target.value;
}

temparr: any[] = [];

getProductByName() 
{
 this.flag=true;
 this.temparr=[];
 if (this.temp =='' || this.temp==null) 
 {
   this.temparr=[];
   this.temparr = this.products;
 }
 else 
 {
   for (let i = 0; i < this.products.length; i++) 
   {
     if (this.products[i].productname == this.temp) 
     {
       this.flag=true;
       this.flag1=true;
       this.temparr.push(this.products[i]);
       console.log(this.flag);
       break;
     }
     else
     {
       this.flag=false;
       this.flag1=true;
       console.log(this.flag);
     }
     
   }

   if(this.flag==true)
   {
     this.p.emit(this.flag);
   }

   else
   {
     this.p.emit(this.flag);
   }
   
 }
 
}

}

