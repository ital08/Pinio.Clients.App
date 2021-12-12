import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { AvatarModule } from "ngx-avatar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material";
import { HttpService } from "./service/http.service";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CartComponent } from "@modules/home/modals/cart/cart.component";
import { NoCartComponent } from "@modules/home/modals/no-cart/no-cart.component";
import { NgxSliderModule } from "@angular-slider/ngx-slider";

@NgModule({
  declarations: [NoCartComponent, CartComponent],
  imports: [
    MaterialModule,
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgxSliderModule
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
  entryComponents: [NoCartComponent, CartComponent]
})
export class SharedModule { }
