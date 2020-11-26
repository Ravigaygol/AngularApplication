import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  printHello(): string {
    return "Hello my service is running....!";
  }
}