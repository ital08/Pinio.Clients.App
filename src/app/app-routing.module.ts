import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "@shared/components/not-found/not-found.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";
import { AuthlayoutComponent } from "./layout/authlayout/authlayout.component";
import { ContentlayoutComponent } from "./layout/contentlayout/contentlayout.component";
import { ProfileComponent } from "./layout/profile/profile.component";

const routes: Routes = [
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
  {
    path: "profile",
    component: ProfileComponent,
    loadChildren: () =>
      import("./modules/profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "auth",
    component: AuthlayoutComponent,
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    loadChildren: () =>
      import("./modules/admin/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "authAdmin",
    component: AuthlayoutComponent,
    loadChildren: () =>
      import("./modules/admin/authAdmin/authAdmin.module").then((m) => m.AuthAdminModule),
  },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
