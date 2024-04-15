import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from './bloc.model';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private baseUrl = 'http://192.168.1.11:8181/api/foyers';

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/findAllF`);
  }
}
