import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email = new FormControl("", [Validators.required, Validators.email]);
  pwd = new FormControl("");
  hide = true;
  constructor() {}

  ngOnInit() {}
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "Debes ingresar un Correo Electronico";
    }

    return this.email.hasError("email") ? "No es un correo Valido" : "";
  }
}
