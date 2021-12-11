import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { CartComponent } from "@modules/home/modals/cart/cart.component";
import { NoCartComponent } from "@modules/home/modals/no-cart/no-cart.component";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  dato: String;
  bsModalRef: BsModalRef;
  dialogRef: MatDialogRef<any>;
  constructor(private router: Router,
    private modalService: BsModalService,
    private dialog: MatDialog) { }
  cond;
  ngOnInit() {
    this.statuslogin();
  }
  statuslogin() {
    this.dato = localStorage.getItem("clientname");
    if (this.dato != null) {
      this.cond = false;
    } else {
      this.cond = true;
    }
  }
  logout() {
    localStorage.clear();
    window.location.reload();
  }
  home() {
    this.router.navigateByUrl("");
  }
  openCart() {
    if (localStorage.getItem("clientname") != null) {

      // const initialState = {
      //   title: "Inicio de Sesión",
      //   message: "Las credenciales ingresadas son incorrectas/inválidas",
      //   acceptButton: {
      //     text: "Reintentar"
      //   },
      //   cancelButton: {
      //     text: "Seguir navegando"
      //   }
      // };
      // this.bsModalRef = this.modalService.show(CartComponent, { class: 'modal right fade', backdrop: 'static', keyboard: false, initialState })
      this.dialogRef = this.dialog.open(CartComponent, {
        position: { right: "0", top: "0" },
        height: "100%",
        width: "300px",
        hasBackdrop: true,
        panelClass: ["animate__animated", "animate__bounceInRight"],
      })
    }
    else {
      const initialState = {
        title: "Ups ! Parece que no has iniciado sesion aun :(",
        message: "Accede para ingresar a tu carrito de compras",
        acceptButton: {
          text: "Iniciar Sesión"
        },
        cancelButton: {
          text: "Seguir navegando"
        }
      };
      this.bsModalRef = this.modalService.show(NoCartComponent, { class: 'modal-dialog-centered', ignoreBackdropClick: false, keyboard: false, initialState })

    }
  }
}
