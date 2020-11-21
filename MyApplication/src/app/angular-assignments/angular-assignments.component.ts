import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-assignments',
  templateUrl: './angular-assignments.component.html',
  styleUrls: ['./angular-assignments.component.css']
})
export class AngularAssignmentsComponent implements OnInit {
  employees:any[];
  constructor() { 
    //  this.name="Ravi";
  /*   this.employees=[
      {
        ecode:101,
        ename:"Ravi gaygol",
        salary:25000
      },
      {
        ecode:102,
        ename:"Ajay Mojar",
        salary:30000
      },
      {
        ecode:103,
        ename:"Akshay Bundele",
        salary:40000
      }
      
    ]
   */  }
    trackbyemp(index:number,employee:any):string
    {
      return employee.ecode;
    }
    getEmployees()
    {
      this.employees=[
        {
          ecode:'101',
          ename:"Ravi gaygol",
          salary:25000
        },
        {
          ecode:'102',
          ename:"Ajay Mojar",
          salary:30000
        },
        {
          ecode:'103',
          ename:"Akshay Bundele",
          salary:40000
        }
     
      ]
    }
  ngOnInit(): void {
  }
  //  message:string="One way";
/* message:string="Welcome ";
  name:string;  
  path:string="./assets/Camera.jpg";
  isdisabled=false;
  city:string;
   
/* getData():string
{
  return "Data Binding";
}
getCity(city:string)
{
this.city=city;
alert(this.city);
console.log(this.city);
} */
/* name:string='Ravi';
classtoapply:string="italicClass boldClass colorClass";
isapply=true;
isBold:boolean=true;
isItalic:boolean=true;
isItalic1:boolean=false;
fontsize:number=20;
ncolor:string='blue';
applyChange()
{
let classes={
  boldClass:this.isBold,
  italicClass:this.isItalic,
  colorClass:this.fontsize,
}
return classes;
}
applyStyle()
{
  let style=
  {
    'font-weight':this.isBold?'bold':'normal',
    'font-style':this.isItalic?this.isItalic1?'italic':'oblique':'normal',
    'font-size.px':this.fontsize,
    'color':this.ncolor,
  }
  return style;
} */
  show:boolean=true;
  age:number=20;
  name:string="Ravi";
  city:string="Akot";
  gender="male";
  color="red";
  togetDetails()
  {
    this.show=!this.show;
  }
  isBold:boolean=true;
  isItalic:boolean=true;
  fontsize:number=50;
  ncolor:string='green';
  applyClass()
  {
  let classes={
    boldClass:this.isBold,
    italicClass:this.isItalic,
    colorClass:this.fontsize,
  }
  return classes;
  }
  applyStyle()
  {
    let style=
    {
      'font-weight':this.isBold?'bold':'normal',
      'font-style':this.isItalic?'italic':'normal',
      'font-size.px':this.fontsize,
      'color':this.ncolor,
    }
    return style;
  }  
}