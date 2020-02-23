import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AppConfigService } from "../core/app-config.service";

@Injectable({
  providedIn: "root"
})
export class WeatherDataService {
  weatherForecastUrl = "";

  constructor(private http: HttpClient, private appConfig: AppConfigService) {
    const ipAddress = appConfig.get("serverIpAddress");
    const port = appConfig.get("serverPort");

    this.weatherForecastUrl = `https://${ipAddress}:${port}/${environment.weatherApi}`;
  }

  getForecast(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.weatherForecastUrl);
  }
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
