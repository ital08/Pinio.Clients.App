import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginadminComponent } from './pages/loginadmin/loginadmin.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
const routes: Routes = [
  {
    path: "",
    component: LoginadminComponent,
  },

  {
    path: "dashboard-admin",
    component: DashboardAdminComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminRoutingModule { }
