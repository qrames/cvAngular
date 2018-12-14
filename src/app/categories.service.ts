import { Injectable } from '@angular/core';

import { Category } from './category';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  getCategories(id): Observable<Category> {
    // option -1 for get all Categories
    if (id != -1){
      return this.http.get<Category>('http://127.0.0.1:8000/categories/'+id+'/');
    } else {
      return this.http.get<Category>('http://127.0.0.1:8000/categories/');
    }

  }

}
