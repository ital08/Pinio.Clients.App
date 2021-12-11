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
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8",
    }),
  };
  private APIENDPOINT: string = environment.urlApiService;
  constructor(private httpService: HttpService, private http: HttpClient) {}

  login(email: String, pwd: String) {
    return this.httpService.get(
      `${this.APIENDPOINT}/products/user?clientemail=${email}&clientpassword=${pwd}`
    );
  }
  register(email: String, pwd: String) {
    return this.httpService.get(
      `${this.APIENDPOINT}/products/register?clientemail=${email}&clientpassword=${pwd}`
    );
  }
}
