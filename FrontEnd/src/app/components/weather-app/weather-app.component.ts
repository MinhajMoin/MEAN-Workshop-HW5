import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service'
import { WeatherResults } from '../../weather-results';
import { UsersService } from '../../services/users.service';
import { GetUsersResults } from '../../interfaces/get-users-results';
@Component({
  selector: 'ta-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {
  CityName = '';
  @Output() sender = new EventEmitter<any>();
  Coordinates: any;
  Weather=[];
  other: any;
  Wind: any;
  name: any;

  constructor(
    private weatherService: WeatherServiceService
  ) { }

  ngOnInit() {  }

  
  send()
  {
    this.weatherService.getWeather(this.CityName).subscribe((response: WeatherResults) => {
      this.Coordinates = '(' + response.coord.lon + ',' + response.coord.lat+')';
      this.Weather = response.weather;
      this.other = response.main;
      this.Wind = response.wind;
      this.name = response.name;
      console.log(response.message);
   });
   
  }

}
