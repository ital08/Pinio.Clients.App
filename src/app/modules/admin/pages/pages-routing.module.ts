import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AdminLayoutComponent } from 'src/app/layout/admin-layout/admin-layout.component';
import { AuthlayoutComponent } from 'src/app/layout/authlayout/authlayout.component';
const routes: Routes = [
    {
        path: "dashboard-admin",
        component: DashboardAdminComponent,
      },
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
