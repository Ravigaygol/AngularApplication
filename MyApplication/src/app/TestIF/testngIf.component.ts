import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ngif',
    templateUrl: 'testngIf.component.html',
    styleUrls: ['./testngIf.component.css']
})

export class ngIFComponent implements OnInit {
    constructor() { }
appTitle:string="Welcome to";
status:boolean=true;
flag1:boolean=true;

arr:number[]=[10,20,30,40];
arrString:string[]=['Angular','Java','JavaScipt','NodeJs'];

person:any=
[
    {
        pid:101,
        pname:"Ravi",
        flat:
        [
            {flatid:1},
            {flatid:220},
            {flatid:505}
        ]
    }
]
Employee:any=
[
    {
        eid:555,
        ename:"Gaygol",
        stud:
        [
            {sid:100},
            {sid:200},
            {sid:300}
        ]
    }
]
emp:any=
[
    {
        empid:10,
        empname:"ABC",
        empsal:15000
    },
    {
        empid:20,
        empname:"XYZ",
        empsal:20000
    },
    {
        empid:30,
        empname:"PQR",
        empsal:25000
    },
    {
        empid:40,
        empname:"LMN",
        empsal:30000
    }

]
    ngOnInit() { }
}