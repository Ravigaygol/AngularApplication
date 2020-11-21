export class Book
{
  bkname:string;
  price:number;
 constructor(public bkName:string,public Price:number)
 {
   this.bkname=bkName;
   this.price=Price;
 }
}