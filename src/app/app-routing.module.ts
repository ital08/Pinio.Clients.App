import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "@shared/components/not-found/not-found.component";
import { ContentlayoutComponent } from "./layout/contentlayout/contentlayout.component";

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "home/",
  //   pathMatch: "full",
  // },
  {
    path: "",
    component: ContentlayoutComponent, // Should be replaced with actual auth guard
    children: [
      {
        path: "",
        loadChildren: () =>
          import("@modules/home/home.module").then((m) => m.HomeModule),
      },
    ],
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
