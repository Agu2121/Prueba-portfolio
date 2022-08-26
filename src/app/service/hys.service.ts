import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hys } from '../model/hys';

@Injectable({
  providedIn: 'root'
})

export class HysService {
  URL= 'http://localhost:8080/habilidades/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hys[]> {
    return this.httpClient.get<Hys[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Hys> {
    return this.httpClient.get<Hys>(this.URL + `detail/${id}`);
  }

  public save(habilidades: Hys): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', habilidades);
  }

  public update(id: number, habilidades: Hys): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, habilidades);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
