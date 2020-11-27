import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-functions',
  template: ``,
})
export class ObservableFunctionsComponent implements OnInit {
  ngOnInit(): void { }
  constructor() {
    console.log("Observable creation using From");
   /*const array1=[101,202,303]*/
   /*const obsFrom=from('Ravi Gaygol'); */
   /* let myMap=new Map()
   myMap.set(0,'Ravi')
   myMap.set(1,'Gaygol')*/
/*    console.log("Observable creation using From and iterable");
    const obsFrom=from(this.generateNos()); */
    console.log("Observable creation using From and Promise");             
    const promiseSource=from(new Promise(resolve=>resolve('Ravi Gaygol'))) 
    const obsFrom=from(promiseSource);
    obsFrom.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))
  }
  *generateNos()
  {
    var i=0;
    while(i<5)
    {
      i=i+1;
      yield i;
    }
  }
}

/* 1-CREATE METHOD OBSERVABLE CREATION

  constructor() {
    console.log("Observable creation using create method");
    const obsUsingCreate=Observable.create(observer=>
      {
       setTimeout(()=>{observer.next("1")},1000);
       setTimeout(()=>{observer.next("2")},2000);
       setTimeout(()=>{observer.next("3")},3000);
       setTimeout(()=>{observer.complete()},5000);
      })
      obsUsingCreate.subscribe(val=>
        console.log(val),
        error=>console.log("error"),
        ()=>console.log("complete"))
  }

2-Of and Array OBSERVABLE CREATION

  constructor() {
  console.log("Observable creation using Of and Array");
  const array1=[1,2,3,4,5]
  const array2=['A','B','C','D','E']
  const obsOf=of(array1,array2);
  obsOf.subscribe(val=>console.log(val),
  error=>console.log("error"),
  ()=>console.log("complete"))
  }
********************************************

constructor() {
    console.log("Observable creation using Of");
    /*const obsOf=of(1,2,3,4,5);*/
    /*const obsOf=of('Ravi','Gaygol');
    const obsOf=of('Ravi','Gaygol',100,[101,202,303]);       
    obsOf.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))
  }
  */