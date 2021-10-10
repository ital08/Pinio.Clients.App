import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundProductComponent } from './not-found-product.component';

describe('NotFoundProductComponent', () => {
  let component: NotFoundProductComponent;
  let fixture: ComponentFixture<NotFoundProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
