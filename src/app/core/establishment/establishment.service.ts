import { take, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establishment } from 'src/app/models/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  constructor(private http: HttpClient) {}

  public getEstablishments(): Observable<Establishment[]> {
    const url = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments';
    return this.http.get<Establishment[]>(url).pipe(
      take(1),
      map(response => {
        localStorage.setItem('establishments', JSON.stringify(response));
        return response;
      })
    );
  }

  public async getEstablishmentById(id: string): Promise<Establishment> {
    let establishmentsArr: Establishment[];
    if (localStorage.getItem('establishments')) {
      establishmentsArr = JSON.parse(localStorage.getItem('establishments'));
    } else {
      establishmentsArr = await this.getEstablishments().toPromise();
    }
    const establishment = establishmentsArr.find(el => el.id === id);
    return establishment;
  }

  public updateEstablishmentById(id: string, data: Establishment): void {
    let establishmentsArr: Establishment[];
    establishmentsArr = JSON.parse(localStorage.getItem('establishments'));
    const idx = establishmentsArr.findIndex(el => el.id === id);
    const {name, address} = data;
    establishmentsArr[idx].name = name;
    establishmentsArr[idx].address = address;

    localStorage.clear();
    localStorage.setItem('establishments', JSON.stringify(establishmentsArr));

  }
}
