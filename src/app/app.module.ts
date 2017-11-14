import { InterceptorHttpService } from './../providers/interceptor-http-service';
import { CookieService } from 'angular2-cookie/core';
import { Utils } from './../entity/Utils';
import { Http, HttpModule } from '@angular/http';
import { LoginPageModule } from './../pages/login/login.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentInicial } from './app.component';

import { AboutPage } from '../pages/about/about';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductListPage } from '../pages/product-list/product-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { ProductProvider } from '../providers/product/product';
import { LoaderProvider } from '../providers/loader/loader';
import { XHRBackend, RequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    ComponentInicial,
    AboutPage,
    HomePage,
    TabsPage,
    ProductListPage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    IonicModule.forRoot(ComponentInicial)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ComponentInicial,
    AboutPage,
    HomePage,
    TabsPage,
    ProductListPage,
    RegisterPage

  ],
  providers: [
    StatusBar,
    CookieService,
    SplashScreen,
    Utils,
    {
      provide: Http,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
        return (new InterceptorHttpService(backend, defaultOptions))
      },
      deps: [XHRBackend, RequestOptions]
    }
    ,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServiceProvider,
    ProductProvider,
    LoaderProvider
  ]
})
export class AppModule { }
