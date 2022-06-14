import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { environment } from 'src/environments/environment';

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

  update(media: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.apiEndpoint}/categories/${media.id}`, media);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Category>(`${environment.apiEndpoint}/categories/${id}`);
  }

}
