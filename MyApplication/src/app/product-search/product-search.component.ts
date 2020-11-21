import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  products:any;
  searchName:string
  constructor() { 
    this.products=[
      {
        pid:1,
        pname:"Mobile",
        pprice:15000,
        pcolor:"Red",
        discount:10 
           
      },
      {
        pid:2,
        pname:"Charger",
        pprice:1500,
        pcolor:"Blue",
        discount:15  
      },
      {
        pid:3,
        pname:"Cover",
        pprice:120,
        pcolor:"Orange",
        discount:20 
      },
      {
        pid:4,
        pname:"Data cable",
        pprice:100,
        pcolor:"Green",
        discount:10  
      }
  
    ]
  }
  ngOnInit(): void {
  }
//  search:string="Enter product name";
 getProductByName(searchName)
 {
   var empobject=this.products.filter(function(node)
   {
     if(this.pname==node.pname)
     {
      return this.pname;
     }
   });
   return empobject;
 }
}
