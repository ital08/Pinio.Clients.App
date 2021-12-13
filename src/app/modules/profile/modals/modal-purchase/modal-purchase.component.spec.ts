import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPurchaseComponent } from './modal-purchase.component';

describe('ModalPurchaseComponent', () => {
  let component: ModalPurchaseComponent;
  let fixture: ComponentFixture<ModalPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
