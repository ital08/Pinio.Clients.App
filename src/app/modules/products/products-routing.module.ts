import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent } from "@shared/components/not-found/not-found.component";
import { ProductsComponent } from "./pages/products/products.component";

export const routes: Routes = [
  {
    path: "",
    component: NotFoundComponent,
  },
  { path: "item/:id", component: ProductsComponent },
];

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
