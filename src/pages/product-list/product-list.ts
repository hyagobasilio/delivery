import { Component, OnInit } from '@angular/core';
/*import { ViewProduct } from '../view-product/view-product';*/
import { NavController } from 'ionic-angular';

import { ProductProvider } from '../../providers/product/product';
import { LoginPage } from '../login/login';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LoaderProvider } from '../../providers/loader/loader';

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})

export class ProductListPage implements OnInit {
	products:any = [];//[{"id":1,"name":"Jody Williamson","description":"She'll get me executed, as sure as ferrets are ferrets! Where CAN I have none, Why, I do wonder what CAN have happened to me! When I used to do:-- 'How doth the little--\"' and.","price":"217.28","created_at":"2017-04-12 00:35:38","updated_at":"2017-04-12 00:35:38"},{"id":2,"name":"Adella Dickinson","description":"Nobody moved. 'Who cares for you?' said the Mouse heard this, it turned round and get ready to sink into the garden with one finger, as he spoke, and added 'It isn't directed at.","price":"800.58","created_at":"2017-04-12 00:35:38","updated_at":"2017-04-12 00:35:38"},{"id":3,"name":"Isabel Walsh II","description":"The rabbit-hole went straight on like a thunderstorm. 'A fine day, your Majesty!' the soldiers shouted in reply. 'Idiot!' said the Mock Turtle in a great thistle, to keep back.","price":"707.77","created_at":"2017-04-12 00:35:38","updated_at":"2017-04-12 00:35:38"},{"id":4,"name":"Mr. Jabari Schoen MD","description":"Alice. 'You must be,' said the Duchess; 'and that's the jury-box,' thought Alice, 'shall I NEVER get any older than I am in the distance. 'Come on!' cried the Gryphon. 'It's all.","price":"435.25","created_at":"2017-04-12 00:35:38","updated_at":"2017-04-12 00:35:38"},{"id":5,"name":"Gretchen Krajcik","description":"Cat, and vanished. Alice was just possible it had entirely disappeared; so the King said, turning to Alice. 'Only a thimble,' said Alice indignantly, and she went on eagerly:.","price":"931.94","created_at":"2017-04-12 00:35:38","updated_at":"2017-04-12 00:35:38"},{"id":6,"name":"Korbin Lakin","description":"Why, I do it again and again.' 'You are old,' said the Queen, who was reading the list of singers. 'You may not have lived much under the sea,' the Gryphon in an offended tone..","price":"623.54","created_at":"2017-04-12 00:35:38","updated_at":"2017-04-12 00:35:38"}];

  constructor(public navCtrl: NavController,
  	public productProvider: ProductProvider,
    private loaderProvider:LoaderProvider
    ) {
  }

  getProducts ():void {
    //this.loaderProvider.show();
  	this.productProvider.getProducts()
    .toPromise()
    .then(res => {
      this.products = res;
      //this.loaderProvider.hide();
    },err => {
      console.log('deuErro');
      this.loaderProvider.showAlert();
      //this.loaderProvider.hide();
    });
      
  }

  ngOnInit():any {
    this.getProducts();
  }

  viewItem(product) {
  	//this.navCtrl.push(ViewProduct, {product: product});
  }

}
