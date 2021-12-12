import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [ DashboardAdminComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
