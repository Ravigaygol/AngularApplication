import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-demo',
  templateUrl: './attribute-demo.component.html',
  styleUrls: ['./attribute-demo.component.css']
})
export class AttributeDemoComponent implements OnInit {

  ngOnInit(): void {
  }
svar:string="Style using ngStyle";
    color1:string='blue'
    color:string;
    size:number;
    displayText:string;
    visible:boolean;
    constructor()
    {
        this.color = 'pink';
        this.size = 28;
        this.displayText = 'show-class';
        this.visible = true;
    }  

}
