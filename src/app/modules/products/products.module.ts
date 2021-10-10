import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { ProductsRoutingModule } from "./products-routing.module";
import { NotFoundComponent } from "@shared/components/not-found/not-found.component";
import { ProductsComponent } from "./pages/products/products.component";

@NgModule({
  declarations: [NotFoundComponent, ProductsComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class ProductsModule {}
