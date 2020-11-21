import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  
  title:string="Employee-Portal"
  empid:number;
  empname:string;
  empsal:number;
  empDept:string;
  employees:any=[];
  selectedIndex:number;
  isEdit:boolean;
  isAdd:boolean=true;
  AddEmp():void
  {
    this.isAdd=true;
    this.employees.push(
      {
        empid:this.empid,
        empname:this.empname,
        empsal:this.empsal,
        empDept:this.empDept
      }
    );
    this.empid=0;
    this.empname=' ';
    this.empsal=0;
    this.empDept=' ';
  }
  DeleteEmp(i)
  {
     this.employees.splice(i,1);  
  }
EditEmp(i)
{
this.isEdit=true;
this.isAdd=false;
this.selectedIndex=i;
this.empid=this.employees[i].empid;
this.empname=this.employees[i].empname;
this.empsal=this.employees[i].empsal;
this.empDept=this.employees[i].empDept;
}
UpdateEmp()
{
this.isEdit=false;
this.isAdd=true;
this.employees[this.selectedIndex].empid=this.empid;
this.employees[this.selectedIndex].empname=this.empname;
this.employees[this.selectedIndex].empsal=this.empsal;
this.employees[this.selectedIndex].empDept=this.empDept;
}
}
