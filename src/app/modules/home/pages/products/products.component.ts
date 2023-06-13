import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  MatAutocompleteTrigger,
  MatDialog,
  MatDialogRef,
} from "@angular/material";
import {
  ActivatedRoute,
  Params,
  Route,
  Router,
  RouterLinkActive,
} from "@angular/router";
import { CartComponent } from "@modules/home/modals/cart/cart.component";
import { NoCartComponent } from "@modules/home/modals/no-cart/no-cart.component";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Subscription } from "rxjs";
import { ProductService } from "src/app/data/services/products.service";
import { SharedService } from "src/app/data/services/search.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  @Input() loader: string = "./../../../../../assets/loader.gif";
  @Input() height: number = 200;
  @Input() width: number = 200;
  @Input() image: string;

  isLoading: boolean;

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
  idp: string = history.state.id;
  subscription: Subscription;
  //carrito modal
  defaultProduct: any;
  bsModalRef: BsModalRef;
  dialogRef: MatDialogRef<any>;
  //
  id: number;
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private modalService: BsModalService,
    private dialog: MatDialog
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params["id"]) {
        this.id = params["id"];
        this.getProducts();
      } else {
        this.router.navigate([""]);
      }
    });
    this.isLoading = true;
  }

  ngOnInit() {}
  hideLoader() {
    this.isLoading = false;
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
  getProducts() {
    const product = this.productService.getProduct(this.id);
    console.log(product);
    this.defaultProduct = product;
    this.loading = false;
    this.isLoading = false;
  }

  addToCart() {
    this.productService.guardarProductoEnCarrito(this.defaultProduct);
    this.dialogRef = this.dialog.open(CartComponent, {
      position: { right: "0", top: "0" },
      height: "100%",
      width: "300px",
      hasBackdrop: true,
      panelClass: ["animate__bounceOutRight"],
    });
  }
}
