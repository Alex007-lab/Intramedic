import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasAdminComponent } from './quejas-admin.component';

describe('QuejasAdminComponent', () => {
  let component: QuejasAdminComponent;
  let fixture: ComponentFixture<QuejasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuejasAdminComponent]
    });
    fixture = TestBed.createComponent(QuejasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
