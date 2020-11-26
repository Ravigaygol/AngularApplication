import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
public getProductList()
{
  let products:Product[];
  products=[
    new Product(1,"Laptop",10000),
    new Product(2,"Mobile",1500),
    new Product(3,"Sim card",100),
    new Product(4,"Memory card",10),
    new Product(5,"Cover",150)   
  ]
  return products;
}

}
