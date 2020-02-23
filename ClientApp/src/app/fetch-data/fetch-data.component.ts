import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WeatherForecast, WeatherDataService } from "./weather-data.service";

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html"
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(dataService: WeatherDataService) {
    dataService.getForecast().subscribe(
      weatherData => {
        this.forecasts = weatherData;
      },
      error => console.error("Weather Api error:", error)
    );
  }
}
