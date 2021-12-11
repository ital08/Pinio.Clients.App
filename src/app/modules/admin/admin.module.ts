import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { LoginadminComponent } from './pages/loginadmin/loginadmin.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [LoginadminComponent, DashboardAdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
