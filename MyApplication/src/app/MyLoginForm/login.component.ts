import {Component} from "@angular/core";
import { Router } from '@angular/router';
@Component(
{
selector: 'app-MyLoginApp',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class MyLoginAppComponent{
   constructor(private router:Router){}
   public username: string ;
   public password: string ;
    isUsernameValid: boolean = true;
    error: any = null;
    
  login():void{
      if(this.username=="root" && this.password=="root")
       {
        alert("Login successfully..!");
       }
       else
       {
           alert("Invalid inputs..!");
       }   
  }
  
}