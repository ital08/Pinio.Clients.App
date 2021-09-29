import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "./pages/start/start.component";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "menu",
    pathMatch: "full",
  },
  {
    path: "menu",
    component: StartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
