import { ApixuService } from './services/apixu.service';
import { allAppRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
  ReactiveFormsModule,
HttpClientModule],

  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
