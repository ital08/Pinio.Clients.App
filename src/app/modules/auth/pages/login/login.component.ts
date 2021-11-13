import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/data/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loading = true;
  email = new FormControl("", [Validators.required, Validators.email]);
  pwd = new FormControl("");
  hide = true;
  log: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    public formBuilder: FormBuilder
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
          default:
            break;
        }
      });
  }
}
