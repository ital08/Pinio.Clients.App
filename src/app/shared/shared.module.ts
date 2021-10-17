import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { AvatarModule } from "ngx-avatar";

@NgModule({
  declarations: [],
  imports: [MaterialModule, CommonModule],
  exports: [MaterialModule],
})
export class SharedModule {}
