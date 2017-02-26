import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceCardComponent } from './device-card/device-card.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './device.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DeviceCardComponent,
    DeviceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RoutingModule
  ],
  providers: [
    Title,
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
