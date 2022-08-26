import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+'traer/perfil')
  }

  public save(persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', persona);
  }

  public update(persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + 'update', persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
