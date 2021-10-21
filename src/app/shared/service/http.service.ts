import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string, options: any = {}): Observable<T> {
    let optionsMerge = Object.assign(options, { observe: "response" });
    return this.httpClient.get<T>(url, optionsMerge).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  public post<T>(url: string, data?: any, options: any = {}): Observable<T> {
    let optionsMerge = Object.assign(options, { observe: "response" });
    return this.httpClient.post(url, data, optionsMerge).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  public put<T>(url: string, data: any, options: any = {}): Observable<T> {
    let optionsMerge = Object.assign(options, { observe: "response" });
    return this.httpClient.put(url, data, optionsMerge).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  public delete<T>(url: string, data: any, options: any = {}): Observable<T> {
    let optionsMerge = Object.assign(options, { observe: "response" });
    return this.httpClient.delete(url, optionsMerge).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      return throwError(httpError);
    } else {
      return throwError(httpError);
    }
  }
}
