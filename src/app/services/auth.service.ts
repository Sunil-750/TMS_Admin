import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { getMaxListeners } from 'process';

@Injectable()
export class AuthService {
    session:any = false;
    email:any = "sahu@gmail.com";
    password:any= "abcdef";
    constructor(){

    }
    login(){
        
        this.session = true;
    }
    logout(){
        this.session = false;
    }
    isLogin(){
        return !this.session;
    }
    getPassword(){
        return {email:this.email,password:this.password};
    }
}