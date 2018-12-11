import { Injectable } from '@angular/core';

import { Technologie } from './technologie';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {


  constructor(private http: HttpClient) { }

  getTechonologies(): Observable<Technologie[]> {

    return this.http.get<Technologie[]>('http://127.0.0.1:8000/technologies/');

  }
}
