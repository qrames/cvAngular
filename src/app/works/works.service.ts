import { Injectable } from '@angular/core';

import { Work } from './works';

import { environment } from '../../environments/environment'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private http : HttpClient) { }

  getWorks(): Observable<Work[]>{
    return this.http.get<Work[]>(environment.DjangoAPI + '/' + 'works/');
  }

}
