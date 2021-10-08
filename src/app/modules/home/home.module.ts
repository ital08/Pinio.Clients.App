import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "./pages/start/start.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class HomeModule {}
