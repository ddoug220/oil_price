import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommodityPage } from './commodity';

@NgModule({
  declarations: [
    CommodityPage,
  ],
  imports: [
    IonicPageModule.forChild(CommodityPage),
  ],
})
export class CommodityPageModule {}
