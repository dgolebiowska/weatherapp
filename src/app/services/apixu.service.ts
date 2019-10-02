import { WeatherComponent } from './../weather/weather.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private  http: HttpClient) { }
  getWeather(location) {
    return this.http.get(
'http://api.weatherstack.com/current?access_key=213794ed7c9a9880724d5f4db472eb52&query=' + location);
  }
}
