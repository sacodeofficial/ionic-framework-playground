import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KelurahanPageRoutingModule } from './kelurahan-routing.module';

import { KelurahanPage } from './kelurahan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KelurahanPageRoutingModule
  ],
  declarations: [KelurahanPage]
})
export class KelurahanPageModule {}
