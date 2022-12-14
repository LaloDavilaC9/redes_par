import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasFormComponent } from './proximas-form.component';

describe('ProximasFormComponent', () => {
  let component: ProximasFormComponent;
  let fixture: ComponentFixture<ProximasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
