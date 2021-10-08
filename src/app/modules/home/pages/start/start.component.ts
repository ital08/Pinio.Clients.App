import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
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

  toppings: FormGroup;

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
      url: "https://i.linio.com/p/8637b377f896c4216ffa1354c2836275-product.webp",
    },
    {
      productId: 100002,
      name: "S20+",
      brand: "Samsung",
      model: "SKLNHTO202020",
      stock: 2,
      description: "Celular Nuevo",
      price: 3000,
      url: "https://i.linio.com/p/8e1860d92da3ce3eada000c1d22fa5c1-product.webp",
    },
  ];
  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.category = params["category"]; //obtenemos el id del route para usarlo en servicios
    });
  }
  /**Precio**/
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + "k";
    }

    return value;
  }
}
