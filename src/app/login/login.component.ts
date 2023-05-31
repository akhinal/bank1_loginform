import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  data="Happy Banking With Us"
  pdata="Account Number"
  servicedata:any
  constructor(private rout:Router,private sd:DataService){}
ngOnInit():void{

  this.servicedata=this.sd.svar
  console.log(this.servicedata);
  this.sd.smethod()
  
}


  login(){
    alert("login is clicked")
    this.rout.navigateByUrl('home')
    
  }
//  accno(event:any){
// console.log(event.target.value );

//  } 
}
