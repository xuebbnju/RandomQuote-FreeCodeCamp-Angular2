import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Quote} from './quote';
@Injectable()
export class GetQuoteService {
	constructor(private jsonp:Jsonp,private http:Http){}
	private times;

	 private ipUrl="https://sslapi.hitokoto.cn/?encode=json";
  getData(){
  	var search = new URLSearchParams()
  	 // search.set('dataType' , 'JSONP);
     search.set('callback', `__ng_jsonp__.__req${this.times}.finished`);
       this.times=this.times+1;
      return this.http.get(this.ipUrl)
           .toPromise()
                .then((response) => response.json());
     
}
}