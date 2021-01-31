import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class OwnerService {
    url1 = "http://localhost:8080/admin/all-owner";
    constructor(private http:Http){}

    getAllOwner(){
        return this.http.get(this.url1);
    }
}