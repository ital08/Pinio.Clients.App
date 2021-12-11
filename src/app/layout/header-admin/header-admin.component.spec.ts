<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> master

import { HeaderAdminComponent } from './header-admin.component';

describe('HeaderAdminComponent', () => {
  let component: HeaderAdminComponent;
  let fixture: ComponentFixture<HeaderAdminComponent>;

<<<<<<< HEAD
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAdminComponent ]
    })
    .compileComponents();
  }));
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdminComponent ]
    })
    .compileComponents();
  });
>>>>>>> master

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
