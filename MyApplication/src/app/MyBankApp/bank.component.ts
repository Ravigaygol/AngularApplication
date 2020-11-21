import {Component} from "@angular/core";
import { Router } from '@angular/router';
@Component(
{
selector: 'app-MyBankApp',
templateUrl: './bank.component.html',
styleUrls: ['./bank.component.css']
})
export class MyBankAppComponent{
 public amt:number;
 public balance:number=5000;
 public notification:string="";
 Deposite():void{
     this.balance=this.balance+Number(this.amt);
     this.notification="Your new balanaced is- "+this.balance;
 } 
  Withdraw():void
 {
     if(this.amt>this.balance)
     {
         this.notification="Please try different amount";
     }
     else
     {
         this.balance=this.balance-this.amt;
         this.notification="Your new balance is-"+this.balance;
     }
 } 
}