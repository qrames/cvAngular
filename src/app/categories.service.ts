import { Injectable } from '@angular/core';

import { Category } from './category';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  getCategories(): Observable<Category[]> {

    return this.http.get<Category[]>('http://127.0.0.1:8000/categories/');

  }

}
