import { Component, OnInit } from "@angular/core";
import { FindProduct } from "src/app/data/models/response/product.model";
@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"],
})
export class StartComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}
