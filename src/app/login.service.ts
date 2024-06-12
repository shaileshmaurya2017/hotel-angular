import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  checkLogin(){

this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(data=>{
  console.log(data);
});

  }


}
