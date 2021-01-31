import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { OwnerService } from './../services/owner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  allOwner:any=null;


  constructor(
    private ownerService:OwnerService,
    private auth:AuthService,
    private router:Router
    ) {
      if(this.auth.isLogin()){
        this.router.navigate(['/login']);
      }
   }

  ngOnInit() {
    if(this.allOwner == null){
      this.ownerService.getAllOwner().subscribe(data=>{
        this.allOwner =data.json();
        console.log(this.allOwner);
      })
    }
  }

}
