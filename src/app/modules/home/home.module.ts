import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "./pages/start/start.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class HomeModule {}
