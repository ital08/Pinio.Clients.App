import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ModalLoginErrorComponent } from '@modules/auth/modals/modal-login-error/modal-login-error.component';
import { ModalPurchaseComponent } from '@modules/profile/modals/modal-purchase/modal-purchase.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from 'src/app/data/services/products.service';
import { SharedService } from 'src/app/data/services/search.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  UserAddress = [{
    "idEmailAddress": "123",
    "idclient": "123",
    "Address": "Urb.VillaClub 2 Mz R lote 13",
    "PhoneNumber": 992993734,
    "idDepartment": "Lima",
    "IdProvince": "Lima",
    "IdDistrict": "Surco"
  }, {
    "idEmailAddress": "123",
    "idclient": "123",
    "Address": "Urb.VillaClub 2 Mz R lote 13",
    "PhoneNumber": 992993734,
    "idDepartment": "Lima",
    "IdProvince": "Lima",
    "IdDistrict": "Surco"
  }, {
    "idEmailAddress": "123",
    "idclient": "123",
    "Address": "Urb.VillaClub 2 Mz R lote 13",
    "PhoneNumber": 992993734,
    "idDepartment": "Lima",
    "IdProvince": "Lima",
    "IdDistrict": "Surco"
  },]
  //IMG LOADER
  @Input() loader: string = './../../../../../assets/loader.gif';
  @Input() height: number = 200;
  @Input() width: number = 200;
  @Input() image: string;
  isLoading: boolean;
  //
  //modal
  bsModalRef: BsModalRef;
  //
  valid: boolean;
  CartUser = [{ "idProductCatalog": "SGA31B128", "productBrand": "Samsung", "productModel": "Galaxy A31 Black 128", "unitprice": 1000.0, "urlimage": "http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/02/04113410/Samsung-Galaxy-A31-731.jpg", "amount": 1 }, { "idProductCatalog": "SGA31A128", "productBrand": "Samsung", "productModel": "Galaxy A51 AZUL 128", "unitprice": 1200.0, "urlimage": "https://images.samsung.com/is/image/samsung/pe-galaxy-a51-a515-sm-a515fzblpeo-back-202096929?$720_576_PNG$", "amount": 1 }, { "idProductCatalog": "SGS21U5G", "productBrand": "Samsung", "productModel": "Galaxy S21 Ultra 5G", "unitprice": 3000.0, "urlimage": "https://falabella.scene7.com/is/image/FalabellaPE/17892255_1?wid=800&hei=800&qlt=70", "amount": 1 }]
  Subtotal: number;
  constructor(public formBuilder: FormBuilder,
    public productService: ProductService,
    private router: Router,
    private sharedService: SharedService,
    private modalService: BsModalService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getCartUser();
    this.Subtotal = this.getSubTotal(this.CartUser);
  }
  getCartUser() { }
  removeItemCartUser(idProductCatalog) {
    this.CartUser.forEach(element => {
      this.CartUser = this.CartUser.filter((element) => element.idProductCatalog !== idProductCatalog)
    });
    this.Subtotal = this.getSubTotal(this.CartUser);
  }
  //IMG LOADER
  hideLoader() {
    this.isLoading = false;
  }
  //
  getSubTotal(cart: any) {
    let subtotal: number = 0;
    cart.forEach(element => {
      let amount: number = parseFloat(element.amount);
      let unitprice: number = parseFloat(element.unitprice);
      subtotal += (amount * unitprice);
    });
    return subtotal;
  }
  goToPurchase() {
    this.router.navigateByUrl("profile/purchase")
  }
  goToProduct(idProductCatalog: any) {

    this.sharedService.searchProductCart.next(idProductCatalog);
    this.router.navigateByUrl(`product/${idProductCatalog}`)
  }
  goPurchase() {
    const initialState = {
      title: "Transacci??n Exitosa",
      message: "Gracias por comprar en Pinio Peru!",
      acceptButton: {
        text: "Seguir Comprando"
      },
      cancelButton: {
        text: "Seguir Comprando"
      }
    };
    this.bsModalRef = this.modalService.show(ModalPurchaseComponent, { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false, initialState })
  }
}
