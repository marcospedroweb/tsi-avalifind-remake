import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from '../model/media';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  list(): Observable<Media[]> {
    return this.http.get<Media[]>(`${environment.apiEndpoint}/media`);
  }

  store(media: Media): Observable<Media> {
    return this.http.post<Media>(`${environment.apiEndpoint}/media`, media);
  }

  update(media: Media): Observable<Media> {
    return this.http.put<Media>(`${environment.apiEndpoint}/media/${media.id}`, media);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Media>(`${environment.apiEndpoint}/media/${id}`);
  }
}
