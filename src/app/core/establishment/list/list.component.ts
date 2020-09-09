import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../establishment.service';
import { Establishment } from 'src/app/models/establishment.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public establishments: Establishment[];

  constructor(
    private establishmentService: EstablishmentService
  ) { }

  async ngOnInit(): Promise<void> {
    if (localStorage.getItem('establishments')) {
      this.establishments = JSON.parse(localStorage.getItem('establishments'));
    } else {
      this.establishments = await this.establishmentService.getEstablishments()
        .toPromise();
    }
  }
}
