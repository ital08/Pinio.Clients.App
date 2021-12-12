import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { MenuComponent } from './menu/menu.component';
import {ProductosComponent} from './productos/productos.component';
import {EmpleadosComponent} from './empleados/empleados.component';


const routes: Routes = [
    {
      path: "dashboard-admin",
      component: DashboardAdminComponent,
    },
    {
      path: "menu",
      component: MenuComponent,
    },
    {
      path: "Productos",
      component: ProductosComponent,
    },
    {
      path: "Empleados",
      component: EmpleadosComponent,
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
