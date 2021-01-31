import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) {
    if(this.auth.isLogin()){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    console.log("home loaded loading order.");
    this.router.navigateByUrl('/home/order');

  }
  
  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
