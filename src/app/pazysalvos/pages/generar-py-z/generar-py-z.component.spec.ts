import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarPyZComponent } from './generar-py-z.component';

describe('GenerarPyZComponent', () => {
  let component: GenerarPyZComponent;
  let fixture: ComponentFixture<GenerarPyZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarPyZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarPyZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
