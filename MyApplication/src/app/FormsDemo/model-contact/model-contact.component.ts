import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model-contact',
  templateUrl: './model-contact.component.html',
  styleUrls: ['./model-contact.component.css']
})
export class ModelContactComponent implements OnInit {
  
  ngOnInit(): void {
  }
  title = 'app works!';
  registerForm: FormGroup;
  submitted: boolean;
  submitteddata:any;
  constructor() { 
    this.registerForm = new FormGroup
    ({
        first_name: new FormControl("Kiran"),
        last_name: new FormControl("Tiwari"),
        phone: new FormControl("12345"),
        email: new FormControl("linoel@gmail.com"),
        address: new FormGroup
        ({
            street: new FormControl("Some street"),
            zip: new FormControl("12345"),
            city: new FormControl("A")
        })
    });
  }
  
  save(fvalue) {
    //this.submitted = true;
    console.log(fvalue);
    this.submitteddata=fvalue;
}
}
