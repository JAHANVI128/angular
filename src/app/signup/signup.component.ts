import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email = ""
  fname = ""
  password = ""

  signup(){
    console.log("First name : ",this.fname);
    console.log("Email : ",this.email);
    console.log("Password : ",this.password);
  }
}
