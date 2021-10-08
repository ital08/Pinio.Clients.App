import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { FindProduct } from "src/app/data/models/response/product.model";
@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"],
})
export class StartComponent implements OnInit {
  private routeSub: Subscription;
  category: string;
  products: FindProduct[] = [
    {
      productId: 100001,
      name: "Televisor 40'",
      brand: "Samsung",
      model: "S40LNK2019",
      stock: 30,
      description: "Televisor Nuevo",
      price: 1999,
    },
    {
      productId: 100002,
      name: "S20+",
      brand: "Samsung",
      model: "SKLNHTO202020",
      stock: 2,
      description: "Celular Nuevo",
      price: 3000,
    },
  ];
  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.category = params["category"]; //obtenemos el id del route para usarlo en servicios
    });
  }
}
