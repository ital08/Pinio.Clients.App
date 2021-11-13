import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  dato: String;

  constructor(private router: Router) {}
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
    this.router.navigateByUrl("");
  }
  home() {
    this.router.navigateByUrl("");
  }
}
