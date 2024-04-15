import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from './bloc.model';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private baseUrl = 'http://172.16.6.254:8083/api/blocs';

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/findAll`);
  }
}
