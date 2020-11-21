import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
	title="DataBinding Demos";
    flag:boolean= true;
	website = {
	     name : 'TechnoSolutions',
	     url : 'http://www.TechnoloSolutions.com',
	     logo : 'favicon.ico',
	     description: 'This is description of the site'
	};

}
