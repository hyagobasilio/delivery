import { Usuario } from './../../entity/Usuario';
import { Observable } from 'rxjs/Observable';
import { Utils } from './../../entity/Utils';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { CookieService } from 'angular2-cookie/core';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  private loginUrl: string;
  public handleError: any;
  public userUrl:string;
  private auth = {
      grant_type: 'password',
      client_id: '2',
      client_secret: '7wutyriPJ40tob6dbGCe5lz9e8FOvmj4QnYadsAi',
      username: '',
      password: '',
      scope: '',
    };
    

  constructor(public http: Http, public requestOptions:RequestOptions, private cookieService: CookieService) {
    this.loginUrl = Utils.getUrlBackend() + "oauth/token";
    this.userUrl  = Utils.getUrlBackend() + "api/users/logado";
  }

  public login(usuario: Usuario): Observable<any> {

    this.auth.username = usuario.email;
		this.auth.password = usuario.senha;

    return this.http.post(this.loginUrl, this.auth)
      .map(res => res.json());

  }
  
  public refreshToken() {
    let auth = {
      grant_type: 'refresh_token',
      client_id: '2',
      client_secret: '7wutyriPJ40tob6dbGCe5lz9e8FOvmj4QnYadsAi',
      refresh_token: this.cookieService.get('refreshToken'),
      scope: '',
    }
    this.http.post(this.loginUrl, auth)
      .map(result => {
        let res = result.json()
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", res.access_token);
        this.cookieService.put("refreshToken", res.refresh_token);
        
        this.requestOptions.headers.set('Authorization', "Bearer " + res.access_token);
      });
  }
  

  public getUsuarioAtual(token: any) {

    let headers = new Headers({ 'Authorization': "Bearer " + token });

    let options = new RequestOptions({ headers: headers });
    this.requestOptions.headers.set('Authorization', "Bearer " + token);
    return this.http.get(this.userUrl, options)
      .map(res => res.json());
  }


}
