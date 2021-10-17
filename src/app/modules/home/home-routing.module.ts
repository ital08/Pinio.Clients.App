import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "./pages/start/start.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent } from "@shared/components/not-found/not-found.component";
import { NotFoundProductComponent } from "./pages/not-found-product/not-found-product.component";
import { ProductsComponent } from "./pages/products/products.component";

export const routes: Routes = [
  {
    path: "",
    component: StartComponent,
  },
  { path: "category/:category", component: StartComponent },
  {
    path: "category/:category/:brand",
    component: StartComponent,
  },
  {
    path: "not-found",
    component: NotFoundProductComponent,
  },
  {
    path: "products/:id",
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
