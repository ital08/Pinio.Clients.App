import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentlayoutComponent } from "./layout/contentlayout/contentlayout.component";

const routes: Routes = [
  {
    path: "",
    component: ContentlayoutComponent, // Should be replaced with actual auth guard
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("@modules/home/home.module").then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
