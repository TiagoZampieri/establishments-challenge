import { take } from 'rxjs/operators';
import { EstablishmentService } from './../establishment.service';
import { Component, OnInit } from '@angular/core';
import { Establishment } from 'src/app/models/establishment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-establishment-settings',
  templateUrl: './establishment-settings.component.html',
  styleUrls: ['./establishment-settings.component.scss']
})
export class EstablishmentSettingsComponent implements OnInit {
  private establishmentId: string;
  public readonly cities = [
    'Curitiba',
    'Rio de Janeiro',
    'São Paulo'
  ];
  public readonly banks = [
    'Banco do Brasil',
    'Bradesco',
    'Caixa',
    'Santander'
  ];
  public readonly accountTypes = [
    'Conta corrente',
    'Poupança'
  ];
  public form: FormGroup;
  public establishment: Establishment;
  public changed = false;

  constructor(
    private activatedRroute: ActivatedRoute,
    private router: Router,
    private establishmentService: EstablishmentService,
    private fb: FormBuilder
  ) { }

  async ngOnInit(): Promise<void> {
    this.form = this.buildForm();
    this.establishmentId = this.activatedRroute.snapshot.url[0].path;
    this.establishment = await this.establishmentService.getEstablishmentById(this.establishmentId);
    this.setFormValues(this.establishment);
    this.form.valueChanges.pipe(take(1)).subscribe(() => (this.changed = true));
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  private setFormValues(data: Establishment): void {
    this.form.patchValue({
      name: data.name,
      address: data.address
    });
  }

  public save(data: Establishment): void {
    this.establishmentService.updateEstablishmentById(this.establishmentId, data);
    this.router.navigate(['establishment', { relativeTo: this.router }]);
  }
}
