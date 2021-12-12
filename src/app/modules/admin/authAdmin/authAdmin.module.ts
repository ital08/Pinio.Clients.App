import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { authAdminRoutingModule } from './authAdmin-routing.module';



@NgModule({
  declarations: [ LoginadminComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    authAdminRoutingModule
  ]
})
export class AuthAdminModule { }
