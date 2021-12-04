import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "./pages/start/start.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FormsModule } from "@angular/forms";
import { NotFoundProductComponent } from "./pages/not-found-product/not-found-product.component";
import { ProductsComponent } from "./pages/products/products.component";
import { AvatarModule } from "ngx-avatar";
@NgModule({
  declarations: [StartComponent, NotFoundProductComponent, ProductsComponent],
  imports: [CommonModule, SharedModule, AvatarModule, HomeRoutingModule],
})
export class HomeModule { }
