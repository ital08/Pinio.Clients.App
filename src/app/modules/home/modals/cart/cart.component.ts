import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/data/services/products.service";
import { SharedService } from "src/app/data/services/search.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  //IMG LOADER
  @Input() loader: string = "./../../../../../assets/loader.gif";
  @Input() height: number = 200;
  @Input() width: number = 200;
  @Input() image: string;
  isLoading: boolean;
  //
  valid: boolean;
  CartUser = [];
  Subtotal: number;
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private productService: ProductService
  ) {
    this.isLoading = true;
    this.getCartUser();
  }

  ngOnInit() {
    this.getCartUser();
    if (this.CartUser.length > 0) {
      this.valid = false;
    } else {
      this.valid = true;
    }

    console.log(this.Subtotal);
  }
  //IMG LOADER
  hideLoader() {
    this.isLoading = false;
  }
  //
  getCartUser() {
    this.CartUser = this.productService.getCartFromLocalStorage();
    this.getSubTotal();
    this.isLoading = false;
  }
  removeItemCartUser(id: number) {
    this.productService.eliminarProductoDelCarrito(id);
    this.getCartUser();
  }

  getSubTotal() {
    let subtotal: number = 0;
    this.CartUser.forEach((element) => {
      let unitprice: number = parseFloat(element.unitprice);
      subtotal += unitprice;
    });
    this.Subtotal = subtotal;
  }
  goToPurchase() {
    this.router.navigateByUrl("profile/purchase");
  }
  goToProduct(id: any) {
    this.router.navigateByUrl(`product/${id}`);
  }
}
