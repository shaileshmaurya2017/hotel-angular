import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private service : LoginService = inject(LoginService);
  user={
    loginId:"",
    password:""
  }
  onsubmit(){

    console.log("submit clicked",this.user);
    this.service.checkLogin(this.user);
  }
}
