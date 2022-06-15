import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  list(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiEndpoint}/categories`);
  }

  store(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.apiEndpoint}/categories`, category);
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.apiEndpoint}/categories/${category.id}`, category);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Category>(`${environment.apiEndpoint}/categories/${id}`);
  }

}
