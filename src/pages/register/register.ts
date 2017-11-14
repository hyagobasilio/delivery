import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-register',
 	templateUrl: 'register.html',
 })
 export class RegisterPage {
 	private formUser: FormGroup;

 	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder ) {
 		this.formUser = this.formBuilder.group({
 			name: ['', Validators.required],
 			email: ['', Validators.required],
 			password: ['', Validators.required],
 			password_confirmation: ['', Validators.required],
 			description: [''],
 		});
 	}

 	logForm(){
 		console.log(this.formUser.value)
 	}


 }
