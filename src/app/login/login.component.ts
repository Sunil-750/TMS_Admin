import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  message:string = "";
  constructor(
    private auth:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(){
    let credentials = this.auth.getPassword();
    if(credentials["email"] == this.email && credentials["password"] == this.password){
      this.auth.login();
      this.router.navigate(['/home']);
    }else{
      this.message = "Invalid Credentials.";
    }
    
  }
}
