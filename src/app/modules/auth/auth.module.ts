import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./pages/login/login.component";
import { SharedModule } from "@shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from './pages/register/register.component';
import { ModalLoginErrorComponent } from './modals/modal-login-error/modal-login-error.component';
import { BsModalService } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [LoginComponent, RegisterComponent,ModalLoginErrorComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  entryComponents : [ModalLoginErrorComponent]
})
export class AuthModule {}
