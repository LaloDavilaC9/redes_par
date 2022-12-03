import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudTutorComponent } from './solicitud-tutor.component';

describe('SolicitudTutorComponent', () => {
  let component: SolicitudTutorComponent;
  let fixture: ComponentFixture<SolicitudTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
