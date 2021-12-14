import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmpleadosComponent } from './registrar-empleados.component';

describe('RegistrarEmpleadosComponent', () => {
  let component: RegistrarEmpleadosComponent;
  let fixture: ComponentFixture<RegistrarEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
