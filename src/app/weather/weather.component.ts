import { ApixuService } from './../services/apixu.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
public weatherSearchForm: FormGroup;
public weatherData: any;
  constructor(private formBulider: FormBuilder,
              private apixuService: ApixuService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBulider.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
}
}
