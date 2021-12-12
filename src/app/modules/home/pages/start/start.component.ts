import { Route } from "@angular/compiler/src/core";
import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteTrigger, MatDialog, MatDialogRef, PageEvent } from "@angular/material";
import { Options } from "@angular-slider/ngx-slider";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { BootstrapModalModule } from "ngx-bootstrap-modal";
import { concat, Subscription } from "rxjs";
import { ProductService } from "src/app/data/services/products.service";
import * as internal from "assert";
import { SharedService } from "src/app/data/services/search.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { CartComponent } from "@modules/home/modals/cart/cart.component";
import { NoCartComponent } from "@modules/home/modals/no-cart/no-cart.component";
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
  //cart open
  bsModalRef: BsModalRef;
  dialogRef: MatDialogRef<any>;
  //
  //IMG LOADER
  @Input() loader: string = './../../../../../assets/loader.gif';
  @Input() height: number = 200;
  @Input() width: number = 200;
  @Input() image: string;
  isLoading: boolean;
  //
  //SLIDER//
  floor: number;
  ceil: number;
  sliderForm: FormGroup;
  minValue: number = 0;
  maxValue: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 10000,

    translate: (value: number): string => {
      return 'S/.' + value;
    },
    getPointerColor: (value: number): string => {
      return 'white';
    },
    getSelectionBarColor: (value: number): string => {
      return 'white';
    },
    getTickColor: (value: number): string => {
      return '#ed691e';
    },
  };
  //
  autocomplete: MatAutocompleteTrigger;
  loading = true;
  NoItemMessage = false;
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
  labelPosition: 'before' | 'after' = 'after';
  Brands = [
    {
      "id": 1,
      "BrandName": "Samsung"
    }, {
      "id": 2,
      "BrandName": "Huawei"
    }, {
      "id": 3,
      "BrandName": "Apple"
    }, {
      "id": 4,
      "BrandName": "Motorola"
    }, {
      "id": 5,
      "BrandName": "Xiaomi"
    },
  ];
  OrderBy = [
    {
      "id": 1,
      "OptionOrderName": "Nombre"
    }, {
      "id": 2,
      "OptionOrderName": "Mayor a Menor Precio"
    }, {
      "id": 3,
      "OptionOrderName": "Menor a Mayor Precio"
    }
  ];
  //search
  nameSearch: string = history.state.nameSearch;
  subscription: Subscription

  constructor(
    public formBuilder: FormBuilder,
    public productService: ProductService,
    private router: Router,
    private sharedService: SharedService,
    private modalService: BsModalService,
    private dialog: MatDialog
  ) { this.isLoading = true; }
  hideLoader() {
    this.isLoading = false;
  }
  ngOnInit() {
    this.generateSlide();
    this.createFilterForm();
    this.getListProducts();
    this.subscription = this.sharedService.searchSubject.subscribe((mySearch: String) => {
      if (mySearch != undefined) {
        this.primaryFilterSearch(mySearch);
      }
    });
  }
  primaryFilterSearch(name: any) {
    this.products = new Array();
    this.createFilterForm();
    this.firstFilterForm.controls.productmodel.setValue(name);
    this.loading = true;
    this.getListProducts();
  }
  restablecer() {
    this.minValue = 0;
    this.maxValue = 10000;
  }
  generateSlide() {
    this.sliderForm = new FormGroup({
      sliderControl: new FormControl([this.floor, this.ceil])
    });
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
              if (this.products.length > 0) {
                this.NoItemMessage = false;
              }
              else {
                this.NoItemMessage = true;
              }
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
  gotoproduct(product) {
    let link = "product/" + product;
    this.router.navigateByUrl(link, { state: product });
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
