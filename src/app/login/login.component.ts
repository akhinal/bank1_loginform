import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Happy Banking With Us"
  pdata="Account Number"
  login(){
    alert("login is clicked")
  }
 accno(event:any){
console.log(event.target.value );

 } 
}
