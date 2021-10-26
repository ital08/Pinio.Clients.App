import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  // this.routeSub = this.route.params.subscribe((params) => {
  //   this.id = params["id"]; //obtenemos el id del route para usarlo en servicios
  // });
  ngOnInit() {
    console.log("entramos");
  }
}
