import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentlayoutComponent } from './contentlayout.component';

describe('ContentlayoutComponent', () => {
  let component: ContentlayoutComponent;
  let fixture: ComponentFixture<ContentlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
