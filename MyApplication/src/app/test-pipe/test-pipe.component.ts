import { Component, OnInit } from '@angular/core';
import { Book } from './book.component';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  thetitle = 'pipes demo';
  xyz:string="thinkQuotient pvt ltd"
   jd = new Date();
   a: number = 0.259;
   b: number = 12.3495;
   num1: number = 0.208;
   num2: number = 0.10;
 
   course:any={code: 'C101', name: 'Professional Azure', Fees: '24000',
  technology:'Cloud'};
  
  bookObj=new Book("Abc",1234);

}
