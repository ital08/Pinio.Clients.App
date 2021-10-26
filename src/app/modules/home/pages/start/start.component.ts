import { Route } from "@angular/compiler/src/core";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteTrigger, PageEvent } from "@angular/material";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductService } from "src/app/data/services/products.service";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"],

  encapsulation: ViewEncapsulation.None,
})
export class StartComponent implements OnInit {
  @ViewChild(MatAutocompleteTrigger, {
    read: MatAutocompleteTrigger,
    static: false,
  })
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
    public formBuilder: FormBuilder,
    public productService: ProductService,
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
  comprobar() {
    console.log(this.products);
  }
  gotoproduct(product: string) {
    this.router.navigateByUrl("product/${product}");
  }
}
