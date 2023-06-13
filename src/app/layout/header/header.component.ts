import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { CartComponent } from "@modules/home/modals/cart/cart.component";
import { NoCartComponent } from "@modules/home/modals/no-cart/no-cart.component";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { SharedService } from "src/app/data/services/search.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  dato: String;
  bsModalRef: BsModalRef;
  dialogRef: MatDialogRef<any>;
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private modalService: BsModalService,
    private dialog: MatDialog
  ) {}
  cond;
  ngOnInit() {
    this.statuslogin();
  }
  onSearch(value: string) {
    // just emit the event
    this.sharedService.searchSubject.next(value); // emit the value to the shared service
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
    this.dialogRef = this.dialog.open(CartComponent, {
      position: { right: "0", top: "0" },
      height: "100%",
      width: "300px",
      hasBackdrop: true,
      panelClass: ["animate__bounceOutRight"],
    });
  }
  goToItem(name) {
    this.router.navigateByUrl("/", { state: name });
  }
}
