import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalLoginErrorComponent } from '@modules/auth/modals/modal-login-error/modal-login-error.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  loading = true;
  email = new FormControl("", [Validators.required, Validators.email]);
  pwd = new FormControl("");
  hide = true;
  bsModalRef: BsModalRef;
  log: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService:  BsModalService
  ) {}

  ngOnInit() {
    this.createFirstForm();
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "Debes ingresar un Correo Electronico";
    }

    return this.email.hasError("email") ? "No es un correo Valido" : "";
  }

  createFirstForm() {
    this.log = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      pwd: new FormControl(""),
    });
  }

  getlogin() {

    let firstform = this.log.value;
    if(this.log.valid){
    this.userService
      .login(firstform.email, firstform.pwd)
      .subscribe((response: any) => {
        let body = response.body;
        let status = response.status;
        this.loading = false;
        switch (status) {
          case 200:
            if (body.idclient == null) {
              break;
            } else {
              localStorage.setItem("email", body.clientemail);
              localStorage.setItem("clientname", body.clientname);
              localStorage.setItem("clientpassword", body.clientpassword);
              localStorage.setItem("dni", body.dni);
              localStorage.setItem("idclient", body.idclient);
              this.router.navigateByUrl("profile");
            }
            this.router.navigateByUrl('profile');
          default:
            break;
        }
      });
    }
    else {
      const initialState = {
        title: "Inicio de Sesión",
        message: "Las credenciales ingresadas son incorrectas/inválidas",
        acceptButton:{
            text: "Reintentar"
        },
        cancelButton:{
            text: "Seguir navegando"
        }
    };
      this.bsModalRef = this.modalService.show(ModalLoginErrorComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, initialState })
    }
  }
}
