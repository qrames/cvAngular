import { Injectable } from '@angular/core';

import { environment } from '../environments/environment'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommunesService {

  constructor(private http : HttpClient) { }

  getCommunes(): Observable<any[]> {

    return this.http.get<any[]>('https://public.opendatasoft.com/api/records/1.0/search/?dataset=contours-simplifies-des-departements-francais-2015&rows=150&facet=code_dept');
  }
}
