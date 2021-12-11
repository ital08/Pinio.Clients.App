import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR } from '@angular/material';
import { Router } from '@angular/router';
import { ModalLoginErrorComponent } from '@modules/auth/modals/modal-login-error/modal-login-error.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { passwordMatchValidator } from 'src/app/data/models/validator';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  loading = true;
  email = new FormControl("", [Validators.required, Validators.email]);
  pwd = new FormControl("");
  pwd2 = new FormControl("");
  hide = true;
  bsModalRef: BsModalRef;
  log: FormGroup;
  minPw = 8;
  constructor(
    private userService: UserService,
    private router: Router,
    public formBuilder: FormBuilder,
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
      email: ["", [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      password2: ['', [Validators.required]]
    }, {validator: passwordMatchValidator});
  }

  /* Shorthands for form controls (used from within template) */
  get password() { return this.log.get('password'); }
  get password2() { return this.log.get('password2'); }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.log.hasError('passwordMismatch'))
      this.password2.setErrors([{'passwordMismatch': true}]);
    else
      this.password2.setErrors(null);
  }

  getRegister() {
    let firstform = this.log.value;
    if(this.log.valid){
    this.userService
      .register(firstform.email, firstform.pwd)
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
          default:
            break;
        }
      });
    }
    else {
      const initialState = {
        title: "Registrar",
        message: "Las credenciales registradas no son válidas",
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
