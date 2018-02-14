import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommoditiesProvider } from '../../providers/commodities/commodities'
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
prices: any = [];
names: any = [];

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log("ng on it ran")
  this.getCommodity ("COM", "OIL_BRENT");
}


  constructor(
    public navCtrl: NavController, 
    public commoditiesProvider: CommoditiesProvider, 
    private http: Http,
    private storage: Storage) {
  }
  
getCommodity(database_code, dataset_code){
  this.commoditiesProvider.getCommodity(database_code, dataset_code).subscribe(response => {
    this.prices = response.dataset.data;
  })
}

  getName(database_code, dataset_code) {
    this.commoditiesProvider.getCommodity(database_code, dataset_code).subscribe(response => {
      this.names = response.dataset.name;
    })
  }
}