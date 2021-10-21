import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteTrigger, PageEvent } from "@angular/material";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductService } from "src/app/data/services/products.service";
@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"],
})
export class StartComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger, {
    read: MatAutocompleteTrigger,
    static: false,
  })
  products = [];
  autocomplete: MatAutocompleteTrigger;
  loading = true;
  toppings: FormGroup;
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
  constructor(
    // private routeSub: Subscription,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.toppings = formBuilder.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }
  // this.routeSub = this.route.params.subscribe((params) => {
  //   this.category = params["category"]; //obtenemos el id del route para usarlo en servicios
  // });
  ngOnInit() {
    this.createFilterForm();
    console.log(this.productService.getProductCatalog("", "", "", 0));

    this.getListProducts();
  }
  createFilterForm() {
    this.firstFilterForm = this.formBuilder.group({
      autocomplete: [""],
      idproductcatalog: [""],
      productbrand: [""],
      productmodel: [""],
      unitprice: 0,
    });
    console.log(this.firstFilterForm.value);
  }
  /**
   * Get Products
   */
  getListProducts() {
    let firstFilter = this.firstFilterForm.value;
    this.productService
      .getProductCatalog(
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
              this.productCatalogList = body.result;
              this.productCatalogList.forEach((element) => {
                this.products.push(element);
              });
              console.log(this.productCatalogList);
              this.count = body.totalRows;
              break;
            default:
              break;
          }
        },
        (error) => {
          this.loading = false;
          console.log("Error al traer los productos");
        }
      );
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
