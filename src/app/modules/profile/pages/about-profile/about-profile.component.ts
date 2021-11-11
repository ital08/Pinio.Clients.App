import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-about-profile",
  templateUrl: "./about-profile.component.html",
  styleUrls: ["./about-profile.component.css"],
})
export class AboutProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  logout() {
    console.log("cerrando sesion");
    this.router.navigateByUrl("/");
  }
}
