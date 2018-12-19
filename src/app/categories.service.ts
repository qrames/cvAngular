import { Injectable } from '@angular/core';

import { Category } from './category';

import { environment } from '../environments/environment'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.DjangoAPI + '/categories/');
  }

}
