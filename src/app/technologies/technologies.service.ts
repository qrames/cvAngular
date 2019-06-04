import { Injectable } from '@angular/core';

import { Technologie } from './technologie';
import { environment } from '../../environments/environment'

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {


  constructor(private http: HttpClient) { }

  getTechonologies(orderBy, minProgress): Observable<Technologie[]> {

    return this.http.get<Technologie[]>(environment.DjangoAPI + '/technologies/');

  }
}
