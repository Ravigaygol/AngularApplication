import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  contactForm = new FormGroup({
        
    firstname: new FormControl('', Validators.compose
    (
        [Validators.required,
    Validators.minLength(4), Validators.maxLength(6)])
    ),
    lastname: new FormControl('', Validators.compose([Validators.required,
    Validators.minLength(3)])),
    address: new FormGroup({
        city: new FormControl(),
        street: new FormControl('east street'),
        pincode: new FormControl('', Validators.pattern('^[0-9]{6}$'))
    })
})

onSubmit() {
    console.log(this.contactForm.value);
}
}
