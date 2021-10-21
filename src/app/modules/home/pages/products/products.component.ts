import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  private routeSub: Subscription;
  category: string;

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.category = params["category"]; //obtenemos el id del route para usarlo en servicios
    });
  }
}
