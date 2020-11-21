import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  ngOnInit(): void {
  }
  people:any[];
  constructor() {
    this.people=[
      {
        code:'emp1',
        name:'Ravi',
        gender:'male',
        dob:'19/02/1997',
        country:'india'
      },
      {
        code:'emp2',
        name:'Ajay',
        gender:'male',
        dob:'20/03/1996',
        country:'USA'
      },
      {
        code:'emp3',
        name:'Ganesh',
        gender:'male',
        dob:'21/04/1995',
        country:'Pakistan'
      },
      {
        code:'emp4',
        name:'Akshay',
        gender:'male',
        dob:'22/05/1996',
        country:'Brazil'
      },
      {
        code:'emp5',
        name:'Aniket',
        gender:'male',
        dob:'23/06/1998',
        country:'Japan'
      }
      
    ]
   }
}
