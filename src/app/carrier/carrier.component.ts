import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { NavigationService } from './../services/navigation.service';
import { CarrierService } from './../services/carrier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {
  location:any;
  nearbyCarrier:any=null;
  allCarrier:any=null;

  constructor(
    private navService:NavigationService,
    private carrService:CarrierService,
    private auth:AuthService,
    private router:Router 
  ) { 
      if(this.auth.isLogin()){
        this.router.navigate(['/login']);
      }
    this.location = this.navService.getlocation();
    
    if(!this.nearbyCarrier && this.location!=null){
      this.carrService.getNearByCarrier(this.location).subscribe(data=>{
        this.nearbyCarrier = data;
        console.log(this.nearbyCarrier);
      })
    }
  }

  ngOnInit() {
    console.log("Carrier Component loaded");
    if(!this.allCarrier){
      this.carrService.getAllCarrier().subscribe(data=>{
        this.allCarrier = data.json();
        console.log(this.allCarrier);
      });
    } 
  }
}
