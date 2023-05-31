import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  svar="hello hi"

  constructor() { }

  smethod(){
    alert("hello")
  }
}
