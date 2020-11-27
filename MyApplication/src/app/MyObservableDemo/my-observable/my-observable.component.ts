import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
@Component({
  selector: 'app-my-observable',
  template:``
})
export class MyObservableComponent implements OnInit {
  ngOnInit(): void {
  }
obs=new Observable((observer)=>
{
  console.log("Observable starts...!")
  setTimeout(()=>{observer.next("1")},1000);
  setTimeout(()=>{observer.next("2")},2000);
  setTimeout(()=>{observer.complete()},2500);
  setTimeout(()=>{observer.next("3")},3000);
  setTimeout(()=>{observer.error("Error occured/emitted")},3500);
  setTimeout(()=>{observer.next("4")},4000);
  setTimeout(()=>{observer.next("5")},5000);
})
data=[];
constructor() { 
  this.obs.subscribe(val=>
    {
      console.log(val)
    },
    error=>{console.log("error")
    },
    ()=>{console.log("Completed")}
    )
}
}
