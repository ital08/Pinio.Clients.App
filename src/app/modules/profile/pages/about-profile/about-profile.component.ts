import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-about-profile",
  templateUrl: "./about-profile.component.html",
  styleUrls: ["./about-profile.component.css"],
})
export class AboutProfileComponent implements OnInit {
  dato: String;
  constructor(private router: Router) {}

  ngOnInit() {
    this.statuslogin();
  }
  statuslogin() {
    this.dato = localStorage.getItem("clientname");
    if (this.dato == null) {
      this.router.navigateByUrl("");
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl("");
  }
}
