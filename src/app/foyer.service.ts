import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from './foyer.model';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private baseUrl = 'http://192.168.1.11:8181/api/foyers';

  constructor(private http: HttpClient) { }

  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.baseUrl}/findAllF`);
  }
}
