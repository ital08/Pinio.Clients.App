import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "./pages/start/start.component";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: StartComponent,
  },
  { path: "home/:category", component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
