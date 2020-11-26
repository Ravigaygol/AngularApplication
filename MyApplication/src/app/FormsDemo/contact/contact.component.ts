import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  value: any;
  contact: Contact = {
    firstname: "Ganesha",
    lastname: "Omkara",
    city: "heavens", 
    street: "Ganesh Nagar", 
    pincode: "400050"
  };

  logForm(fvalue: any) {
    this.value = fvalue;
    console.log(fvalue);
  }

}
export class Contact {
  firstname: string;
  lastname: string;

  city: string
  street: string
  pincode: string

}
