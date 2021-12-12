import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatAutocompleteTrigger, MatDialog, MatDialogRef } from "@angular/material";
import { ActivatedRoute, Route, Router, RouterLinkActive } from "@angular/router";
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
  @Input() loader: string = './../../../../../assets/loader.gif';
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
  bsModalRef: BsModalRef;
  dialogRef: MatDialogRef<any>;
  //
  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,
    private routeSub: ActivatedRoute,
    private sharedService: SharedService,
    private modalService: BsModalService,
    private dialog: MatDialog
  ) { this.isLoading = true; }

  ngOnInit() {
    this.createFilterForm();
    if (this.idp == undefined) {
      console.log("sacando del url");
      console.log(this.idp)
      this.routeSub.params.subscribe((params) => {
        this.idp = params["id"];
        this.firstFilterForm.value.idproductcatalog = this.idp;

      });
    }
    else {
      this.firstFilterForm.value.idproductcatalog = this.idp;
      console.log("recibido de la anterior");
      console.log(this.idp)
    }
    this.getListProducts();
    this.subscription = this.sharedService.searchProductCart.subscribe((mySearch: String) => {
      if (mySearch != undefined) {
        this.firstFilterForm.value.idproductcatalog = mySearch;
        this.getListProducts();
      }
    });
  }
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
              this.productCatalogList = body.listProductCatalog;
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
  openCart() {
    if (localStorage.getItem("clientname") != null) {

      // const initialState = {
      //   title: "Inicio de Sesión",
      //   message: "Las credenciales ingresadas son incorrectas/inválidas",
      //   acceptButton: {
      //     text: "Reintentar"
      //   },
      //   cancelButton: {
      //     text: "Seguir navegando"
      //   }
      // };
      // this.bsModalRef = this.modalService.show(CartComponent, { class: 'modal right fade', backdrop: 'static', keyboard: false, initialState })
      this.dialogRef = this.dialog.open(CartComponent, {
        position: { right: "0", top: "0" },
        height: "100%",
        width: "300px",
        hasBackdrop: true,
        panelClass: ["animate__bounceOutRight"],

      })
    }
    else {
      const initialState = {
        title: "Ups ! Parece que no has iniciado sesion aun :(",
        message: "Accede para ingresar a tu carrito de compras",
        acceptButton: {
          text: "Iniciar Sesión"
        },
        cancelButton: {
          text: "Seguir navegando"
        }
      };
      this.bsModalRef = this.modalService.show(NoCartComponent, { class: 'modal-dialog-centered', ignoreBackdropClick: false, keyboard: false, initialState })

    }
  }
}
