import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppConfigService {
  private appConfig: any;

  constructor(private http: HttpClient) {}

  async loadAppConfig(): Promise<void> {
    this.appConfig = await this.http.get("/assets/appConfig.json").toPromise();
  }

  get(key: string): any {
    if (!this.appConfig) {
      console.error("application configuration file not loaded!");
      throw Error("application configuration file not loaded!");
    }
    const value = this.appConfig[key];
    if (!value) {
      console.error(`key name: ${key} is not configured.`);
    }
    return value;
  }
}
