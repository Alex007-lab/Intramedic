import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasGralComponent } from './quejas-gral.component';

describe('QuejasGralComponent', () => {
  let component: QuejasGralComponent;
  let fixture: ComponentFixture<QuejasGralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuejasGralComponent]
    });
    fixture = TestBed.createComponent(QuejasGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
