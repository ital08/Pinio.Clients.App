import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

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

}
