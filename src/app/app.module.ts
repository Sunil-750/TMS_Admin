import { AuthService } from './services/auth.service';
import { OwnerService } from './services/owner.service';
import { NavigationService } from './services/navigation.service';
import { CarrierService } from './services/carrier.service';
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OwnerComponent } from './owner/owner.component';
import { CarrierComponent } from './carrier/carrier.component';
import { OrderService } from './services/order.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OrderListComponent,
    OwnerComponent,
    CarrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    OrderService,
    HttpClient,
    CarrierService,
    OwnerService,
    NavigationService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
