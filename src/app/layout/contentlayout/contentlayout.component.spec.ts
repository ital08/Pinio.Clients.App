import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatLabel,
} from "@angular/material";
import { SharedModule } from "@shared/shared.module";
import { HeaderComponent } from "../header/header.component";

import { ContentlayoutComponent } from "./contentlayout.component";

describe("ContentlayoutComponent", () => {
  let component: ContentlayoutComponent;
  let fixture: ComponentFixture<ContentlayoutComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentlayoutComponent],
      imports: [HeaderComponent],
      providers: [
        HeaderComponent,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
