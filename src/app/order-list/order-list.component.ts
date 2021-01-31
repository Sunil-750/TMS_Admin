import { AuthService } from './../services/auth.service';
import { NavigationService } from './../services/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routingComponents } from './../app-routing.module';
import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  // allOrders:{"result":any,"status":any};
  allOrders=null;
  selectedOrder = null;
  constructor(
    private orderService:OrderService,
    private router:Router,
    private navService:NavigationService,
    private route:ActivatedRoute,
    private auth:AuthService
    ) { 
      if(this.auth.isLogin()){
        this.router.navigate(['/login']);
      }
    }

  ngOnInit() {
     this.orderService.getAllOrders().subscribe((data)=>{
        this.allOrders = data;
        console.log(this.allOrders);
     },
     error=>{
       console.log(error);
     });

     
  }
  getAllOrders(){
    this.ngOnInit();
  }
  getOrderByStatus(status){
    console.log("getOrderByStatus() called. ")
    this.allOrders = [];
    this.orderService.getOrdersbyStatus(status).subscribe((data)=>{
      this.allOrders = data;
      console.log(this.allOrders);

    })
  }

  getCurrentOrder(order){
    this.selectedOrder = order;
  }

  findNearbyVehicle(){
    console.log(this.selectedOrder["FROM_LOCATION"]);
    this.navService.setLocation(this.selectedOrder["FROM_LOCATION"]); 
    
    this.router.navigate(['../carrier'],{relativeTo: this.route });
  }
  rejectOrder(){
    console.log("rejected order called"+this.selectedOrder["ORDER_ID"]);
      this.orderService.rejectOrder(this.selectedOrder["ORDER_ID"]).subscribe((data)=>{
        console.log(data);
      });
  }
}
