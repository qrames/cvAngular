import { Injectable } from '@angular/core';

import { Category } from './category';

import { environment } from '../environments/environment'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getCategory(id): Observable<Category> {
    return this.http.get<Category>(environment.DjangoAPI + '/categories/'+id+'/');
  }

}
