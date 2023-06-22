import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = "Happy Banking With Us"
  pdata = "Account Number"
  servicedata: any

  accno: any
  psw: any

  constructor(private router: Router, private ds: DataService) { }
  ngOnInit(): void {



  }


  login() {
    var accno = this.accno
    var psw = this.psw
    this.ds.login(accno, psw).subscribe((result: any) => {
      alert(result.message)
      this.router.navigateByUrl('home')
    },
      result => {
        alert(result.error.message)
      }
    )


  }
  //  accno(event:any){
  // console.log(event.target.value );

  //  } 
}
