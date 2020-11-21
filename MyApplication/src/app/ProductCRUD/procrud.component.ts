import{Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-productCRUD',
    templateUrl: './procrud.component.html',
    styleUrls:['./procrud.component.css']
})

export class productComponent implements OnInit {
    constructor() { }
       ngOnInit() { }
       title:string="ProductComponent"
       id:number;
       name:string;
       price:number;
       products:any=[];
       selectedIndex:number;
       isEdited:boolean;
       isAdded:boolean;
       AddData():void {

        //Array of object
           this.isAdded = true;
           this.products.push({
               "id":this.id,
               "name":this.name,
               "price":this.price
           });
           this.id=0;
           this.name='';
           this.price=0;
       }
       removeProduct(i){
           this.products.splice(i,1);
       }
       editProduct(i){
           this.isEdited = true;
           this.selectedIndex = i;
           this.id = this.products[i].id;
           this.name = this.products[i].name;
           this.price = this.products[i].price;
       }
       updateData(){
           this.isEdited = false;
           this.products[this.selectedIndex].id = this.id;
           this.products[this.selectedIndex].name = this.name;
           this.products[this.selectedIndex].price = this.price;
       }
}