import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CommoditiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class CommoditiesProvider {
  apiKey = 'Mvps8FP-8savzBy4ZcZP';
  url;
 
  
  constructor(public http: Http, private storage: Storage) {
    console.log('The price is crashing');
    this.url = "https://www.quandl.com/api/v3/datasets/"
    
  }



getCommodity(database_code, dataset_code){
  return this.http.get(this.url + database_code + "/" + dataset_code + ".json?" + "api_key=" + this.apiKey)
    .map(res => res.json());
  };
}