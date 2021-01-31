import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){

  }
  title = 'app';
  ngOnInit(){
    console.log("Init called navigating to login.")
    this.router.navigate(['login']);
  }
}
