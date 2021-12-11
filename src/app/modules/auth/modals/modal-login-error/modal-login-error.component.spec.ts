import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginErrorComponent } from './modal-login-error.component';

describe('ModalLoginErrorComponent', () => {
  let component: ModalLoginErrorComponent;
  let fixture: ComponentFixture<ModalLoginErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLoginErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLoginErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
