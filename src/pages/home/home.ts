import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CookieService } from 'angular2-cookie/core';
import { RequestOptions } from '@angular/http';
import { LoginPage } from './../login/login';
import { Usuario } from '../entity/Usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
	public user:any;

  constructor(public navCtrl: NavController, public cookieService: CookieService,
    public requestOptions:RequestOptions) {
  	this.user = cookieService.getObject("usuarioAtual");
  }

  public logout() {
    this.cookieService.removeAll();
    this.requestOptions.headers.set('Authorization', "Bearer ");
    this.navCtrl.setRoot(LoginPage);
    
  }

}
