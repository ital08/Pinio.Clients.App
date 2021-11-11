import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "./pages/start/start.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent } from "@shared/components/not-found/not-found.component";
import { NotFoundProductComponent } from "./pages/not-found-product/not-found-product.component";
import { ProductsComponent } from "./pages/products/products.component";
import { HeaderComponent } from "src/app/layout/header/header.component";
import { SubNavComponent } from "src/app/layout/sub-nav/sub-nav.component";

export const routes: Routes = [
  {
    path: "",
    component: StartComponent,
  },
  { path: "category/:category", component: StartComponent },
  {
    path: "product/:id",
    component: ProductsComponent,
  },
  {
    path: "not-fount",
    component: NotFoundProductComponent,
  },
];

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
