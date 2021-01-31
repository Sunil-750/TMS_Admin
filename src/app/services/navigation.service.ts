import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NavigationService {
    data:any;
    location:any;
    constructor(){}
    getlocation(){
        let loc = this.location;
        this.location = null;
        return loc;
    }

    setLocation(location){
        console.log(location);
        this.location = location;
    }
}