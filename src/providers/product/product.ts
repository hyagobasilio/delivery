import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Utils } from './../../entity/Utils';
import { Observable } from 'rxjs/Observable';
import { LoaderProvider } from '../loader/loader';
import { LoadingController, AlertController, Loading } from 'ionic-angular';

@Injectable()
export class ProductProvider {
  private productsUrl: string;
  public handleError: any;
  private loading:any;

  constructor(public http: Http, 
    public requestOptions: RequestOptions,
    ) {

      this.productsUrl = Utils.getUrlBackend() + "api/products/";
  }

  public getProducts() : Observable<any> {
    return this.http.get(this.productsUrl)
      .do(this.logResponse)
      .map(this.extractData)
      .catch(this.catchErro);
  }

  private extractData(res:Response) {
    return res.json();
  }

  private catchErro(error: Response | any) {
    console.log(error);
    return Observable.throw(error.error || "Erro no servidor.");
    
  }

  private logResponse(res:Response) {
    console.log(res);
  }

}
