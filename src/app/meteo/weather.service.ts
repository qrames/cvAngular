import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeather(city): Observable<any[]> {

    return this.http.get<any[]>(`http://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=fb9e60e86f1a9afc0eea0ede160442c7`);
  }
}
