import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiEndpoint}/users`);
  }

  store(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiEndpoint}/users`, user);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiEndpoint}/users`, user);
  }

  delete(user: User): Observable<User> {
    return this.http.delete<User>(`${environment.apiEndpoint}/users/${user}`);
  }
}
