import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  checkLogin(user:Login){

this.http.post("http://localhost:8080/api/login/check",user).subscribe(data=>{
  console.log(data);
});

// this.http.get("http://localhost:8080/api/room/").subscribe(data=>{
//   console.log(data);
// });

  }


}
