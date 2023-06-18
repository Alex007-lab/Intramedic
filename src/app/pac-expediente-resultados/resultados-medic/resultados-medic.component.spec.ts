import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosMedicComponent } from './resultados-medic.component';

describe('ResultadosMedicComponent', () => {
  let component: ResultadosMedicComponent;
  let fixture: ComponentFixture<ResultadosMedicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosMedicComponent]
    });
    fixture = TestBed.createComponent(ResultadosMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
