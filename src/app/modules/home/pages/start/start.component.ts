import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { PageEvent } from "@angular/material";
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
    {
      productId: 100003,
      name: "Mando de Xbox Series XS + Cable USB-C Compatible con PC",
      brand: "Microsoft",
      model: "MXBOX123G",
      stock: 5,
      description: "Mando Nuevo",
      price: 329,
      url: "https://i.linio.com/p/5acc22fe0763ee8436cdaabf52184603-product.webp",
    },
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
    {
      productId: 100003,
      name: "Mando de Xbox Series XS + Cable USB-C Compatible con PC",
      brand: "Microsoft",
      model: "MXBOX123G",
      stock: 5,
      description: "Mando Nuevo",
      price: 329,
      url: "https://i.linio.com/p/5acc22fe0763ee8436cdaabf52184603-product.webp",
    },
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
    {
      productId: 100003,
      name: "Mando de Xbox Series XS + Cable USB-C Compatible con PC",
      brand: "Microsoft",
      model: "MXBOX123G",
      stock: 5,
      description: "Mando Nuevo",
      price: 329,
      url: "https://i.linio.com/p/5acc22fe0763ee8436cdaabf52184603-product.webp",
    },
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
    {
      productId: 100003,
      name: "Mando de Xbox Series XS + Cable USB-C Compatible con PC",
      brand: "Microsoft",
      model: "MXBOX123G",
      stock: 5,
      description: "Mando Nuevo",
      price: 329,
      url: "https://i.linio.com/p/5acc22fe0763ee8436cdaabf52184603-product.webp",
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
  //Pagination
  //https://material.angular.io/components/paginator/overview
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(",")
        .map((str) => +str);
    }
  }
  /**fin pagination */
}
