import { OrderListComponent } from './order-list/order-list.component';
import { OwnerComponent } from './owner/owner.component';
import { CarrierComponent } from './carrier/carrier.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {path:'login', component : LoginComponent},
    {path:'home', component : HomeComponent,
        children:[
            {path:'carrier', component : CarrierComponent},
            {path:'owner', component : OwnerComponent},
            {path:'order', component : OrderListComponent}      
        ]
    },
    {path:'*', redirectTo:'login',pathMatch:'full'}
]; 

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [LoginComponent,HomeComponent];