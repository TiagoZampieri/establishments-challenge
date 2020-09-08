import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establishment } from 'src/app/models/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  constructor(private http: HttpClient) {}

  public getStablishments(): Observable<Establishment[]> {
    const url = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments';
    return this.http.get<Establishment[]>(url);
  }
}
