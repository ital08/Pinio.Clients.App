import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env";
import { HttpService } from "@shared/service/http.service";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Catalog } from "../models/response/catalog.models";
import { ProductCatalogModel } from "../models/response/product.model";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8",
    }),
  };
  // tslint:disable-next-line:typedef
  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  private APIENDPOINT: string = environment.urlApiService;
  constructor(private httpService: HttpService, private http: HttpClient) {}
  getProductCatalog1(
    productId: string,
    brand: string,
    model: string,
    price: number
  ) {
    return this.httpService.get(
      `${this.APIENDPOINT}/products/productcatalog?idProductCatalog=${productId}&productBrand=${brand}&productModel=${model}&unitprice=${price}&urlimage=string`
    );
  }
  getProductCatalog2(
    productId: string,
    brand: string,
    model: string,
    price: number
  ): Observable<Catalog> {
    return this.http
      .get<Catalog>(
        `${this.APIENDPOINT}/products/productcatalog?idProductCatalog=${productId}&productBrand=${brand}&productModel=${model}&unitprice=${price}&urlimage=string`,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
}
