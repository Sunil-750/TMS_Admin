
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
    url1 = "http://localhost:8080/admin/all-order";
    url2 = "http://localhost:8080/admin/get-order-by-status/";
    url3 = "http://localhost:8080/admin/reject-order/"

  constructor(private http:Http) { }
    getAllOrders(){
        return this.http.get(this.url1).map(res=> res.json());
    }
    getOrdersbyStatus(status){
        console.log("Service called.")
        return this.http.get(this.url2+status).map(res=> res.json());
    }
    rejectOrder(orderID){
        console.log(orderID);
        let body = {"orderID":orderID};
        return this.http.put(this.url3,body);
    }
}
