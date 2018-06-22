import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }
  getWeather(city:string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID=a4126ae264cb2d05fc6a02af5486afd2');
  }
}
