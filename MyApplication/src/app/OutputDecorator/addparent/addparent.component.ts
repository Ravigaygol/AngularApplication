import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addparent',
  templateUrl: './addparent.component.html',
  styleUrls: ['./addparent.component.css']
})
export class AddparentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
msg:number=0;
onNotify(message:number):void
{
  this.msg=message;
}
}
