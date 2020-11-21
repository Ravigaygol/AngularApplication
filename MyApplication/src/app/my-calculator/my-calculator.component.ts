import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css']
})
export class MyCalculatorComponent{
public num1:number;
public num2:number;
public result:number;
addition()
{
 this.result= this.num1 + this.num2;
}
subtraction()
{
 this.result= this.num1 - this.num2;
}
multiplication()
{
 this.result= this.num1 * this.num2;
}
division()
{
 this.result= (this.num1)/(this.num2);
}

}
