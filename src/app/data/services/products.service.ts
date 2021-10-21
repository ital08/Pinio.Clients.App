import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env";
import { HttpService } from "@shared/service/http.service";
import { ProductCatalogModel } from "../models/response/product.model";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  private APIENDPOINT: string = environment.urlApiService;
  constructor(private httpService: HttpService) {}
  getProductCatalog(
    productId: string,
    brand: string,
    model: string,
    price: number
  ) {
    return this.httpService.get(
      `${this.APIENDPOINT}/products/productcatalog?idProductCatalog=${productId}&productBrand=${brand}&productModel=${model}&unitprice=${price}&urlimage=string`
    );
  }
}
