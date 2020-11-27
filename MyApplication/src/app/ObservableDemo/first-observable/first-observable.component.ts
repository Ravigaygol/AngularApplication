import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-first-observable',
 /*  templateUrl: './first-observable.component.html',*/ 
  template: `<h1>Output display on console</h1>`
})
export class FirstObservableComponent implements OnInit {
  observable: Observable<string>;
  observer:Observer<string>;
  subscription:Subscription;
  ngOnInit(): void {
  }
  constructor() { 
    this.observable=new Observable((observer:Observer<string>)=>
    {
      this.observer=observer;
    });
    this.subscription=this.observable
    .subscribe(this.handleData, this.handleError , this.handleComplete);
    this.observer.next('10');
    this.observer.next('20');
    this.observer.next('30');
    this.observer.error("Error occured");
    this.observer.complete();
    const squareOf2=of(1,2,3,4,5).pipe(filter(num=>num%2==0),
    map(num=>num*num));
    squareOf2.subscribe((num)=>console.log(num));
  }
handleData(data)
{
  console.log('Usable data is here',data);
}
handleComplete()
{
  console.log('complete');
}
handleError(error)
{
  console.log('error:',error)
  return Observable.throw(error);
}
ngonDestroy():void
{
  this.subscription.unsubscribe();
}
}
