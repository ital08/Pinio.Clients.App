import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { AvatarModule } from "ngx-avatar";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  exports: [MaterialModule, ReactiveFormsModule, MatAutocompleteModule],
})
export class SharedModule {}
