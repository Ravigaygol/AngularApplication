import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addchild',
  templateUrl: './addchild.component.html',
  styleUrls: ['./addchild.component.css']
})
export class AddchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() add:EventEmitter<number>=new EventEmitter<number>();
num1:number;
num2:number;
onClick():void
{
  this.add.emit(this.num1+this.num2);
}
}
