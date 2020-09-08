import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentSettingsComponent } from './establishment-settings.component';

describe('EstablishmentSettingsComponent', () => {
  let component: EstablishmentSettingsComponent;
  let fixture: ComponentFixture<EstablishmentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
