import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatAutocompleteTrigger } from "@angular/material";
import { ActivatedRoute, Route, Router, RouterLinkActive } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductService } from "src/app/data/services/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {


  autocomplete: MatAutocompleteTrigger;
  loading = true;
  price = 0;
  length = 100;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  tableOffset: number = 0;
  pageNumber: number = 1;
  offset: number = 0;
  pageSize: number = 10;
  count: number = 0;
  sortColumn: string = "name";
  sortType: string = "asc";
  productCatalogList = [];
  category: string;
  firstFilterForm: FormGroup;
  id: string;

  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,
    private routeSub: ActivatedRoute) { }

  ngOnInit() {
    this.createFilterForm();
    this.routeSub.params.subscribe((params) => {
      this.id = params["id"];
      this.firstFilterForm.value.idproductcatalog = this.id;
    });
    console.log(this.firstFilterForm.value.idproductcatalog)
    this.getListProducts();
  }
  products = [];

  createFilterForm() {
    this.firstFilterForm = this.formBuilder.group({
      autocomplete: [""],
      idproductcatalog: [""],
      productbrand: [""],
      productmodel: [""],
      unitprice: 0,
    });
  }
  /**
   * Get Products
   */
  getListProducts() {
    let firstFilter = this.firstFilterForm.value;
    this.productService
      .getProductCatalog1(
        firstFilter.idproductcatalog,
        firstFilter.productbrand,
        firstFilter.productmodel,
        firstFilter.unitprice
      )
      .subscribe(
        (response: any) => {
          let body = response.body;
          let status = response.status;
          this.loading = false;
          switch (status) {
            case 200:
              this.products = body.listProductCatalog;
              console.log(this.products);
              break;
            default:
              break;
          }
        },
        (error) => {
          this.loading = true;
          console.log("Error al traer los productos");
        }
      );
  }
}
