import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StartComponent } from "./pages/start/start.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
