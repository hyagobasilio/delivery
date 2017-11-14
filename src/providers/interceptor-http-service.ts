import {Injectable} from '@angular/core'
import {Http, ConnectionBackend, RequestOptions, Request, Response, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';
 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class InterceptorHttpService extends Http {
	
  constructor(backend: ConnectionBackend, public defaultOptions: RequestOptions) {
	
   	super(backend, defaultOptions);
  }



  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return super.request(url, options);
  }

  get(url: string, options?: Request): Observable<Response> {
      return super.get(url, options);
  }


}
