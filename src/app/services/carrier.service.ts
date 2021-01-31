import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarrierService {
    url1 = "http://localhost:8080/admin/nearby-carrier/";
    url2 = "http://localhost:8080/admin/all-carrier/";

    constructor(private http:Http){}
    getNearByCarrier(location){
            console.log("CarrierService.getNearByCarrier() called.")
            return this.http.get(this.url1+location).map(res=> res.json());
    }
    getAllCarrier(){
        console.log("CarrierService.getAllCarrier() called");
        return this.http.get(this.url2);
    }
}