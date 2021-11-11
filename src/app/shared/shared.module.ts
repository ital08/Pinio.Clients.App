import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { AvatarModule } from "ngx-avatar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material";
import { HttpService } from "./service/http.service";
import { NotFoundComponent } from "./components/not-found/not-found.component";

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  providers: [HttpService],
})
export class SharedModule {}
