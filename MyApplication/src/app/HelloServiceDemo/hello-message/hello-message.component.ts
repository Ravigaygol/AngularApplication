import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from '../hello-service.service';
@Component({
  selector: 'app-hello-message',
  templateUrl: './hello-message.component.html',
  styleUrls: ['./hello-message.component.css']
})
export class HelloMessageComponent {
constructor(private serviceObject:HelloServiceService){}
message:string;
callHello():void
{
this.message=this.serviceObject.printHello();
}
}
