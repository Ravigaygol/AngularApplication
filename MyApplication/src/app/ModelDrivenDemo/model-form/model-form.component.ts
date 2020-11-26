import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    firstname: new FormControl('',
      Validators.compose([Validators.required, Validators.minLength(5)])),
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(8)])),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    gender: new FormControl('', [Validators.required]),
    isMarried: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    address: new FormGroup(
      {
        city: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required])
      }
    )
  })
  value: any;
  onSubmit() {
    console.log(this.contactForm.value);
  }
  countryList: country[] =
    [
      new country("1", "India"),
      new country('2', 'China'),
      new country('3', 'JAPAN')
    ];
  /* 
  get firstname() {
     return this.contactForm.get('firstname');
  } */
}
export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}