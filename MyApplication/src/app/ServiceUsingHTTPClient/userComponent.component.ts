import { Component } from "@angular/core";
import { UserService } from './user.service';



@Component({
    selector:'app-userComponent',
     templateUrl:'./userComponent.component.html'
})
export class UserComponent {
  data: any = []

  constructor(public appService: UserService) { }

  getUsersFromService() {
    try {
      this.appService.getUser()
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
          console.log(this.data);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
}
