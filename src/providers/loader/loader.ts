import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController, AlertController } from 'ionic-angular';

@Injectable()
export class LoaderProvider {

  constructor(public http: Http, private loadingCtrl: LoadingController, private alertCtrl: AlertController ) {

  }

  loading: any = this.loadingCtrl.create({
    content: "Aguarde ..."
  })

  show() {
    this.loading.present();
  }

  hide() {
    this.loading.dismiss();
  }

  public showAlert() {
    this.alertCtrl.create({
          title: 'Erro',
          subTitle: 'Aconteceu um erro ao carregar os produtos!',
          buttons: ['Ok entendi!'] 
        }).present();
  }


}