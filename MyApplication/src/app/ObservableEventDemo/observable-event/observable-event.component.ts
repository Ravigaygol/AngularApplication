import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-observable-event',
  templateUrl: './observable-event.component.html',
  styleUrls: ['./observable-event.component.css']
})
export class ObservableEventComponent implements OnInit {
  @ViewChild('btn',{static:true})
  button:ElementRef;
  buttonSubscription
  constructor(private elm:ElementRef) { }
  ngOnInit(): void { }
  buttonClick()
  {
    this.buttonSubscription=fromEvent(this.button.nativeElement,'click').pipe(debounceTime(300)).subscribe(res=>console.log(res));
  }
  ngAfterViewInit()
  {
   this.buttonClick();
  }
  ngOnDestroy()
  {
    this.buttonSubscription.unsubscribe()
  }
}
