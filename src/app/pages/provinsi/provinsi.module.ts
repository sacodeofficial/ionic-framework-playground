import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvinsiPageRoutingModule } from './provinsi-routing.module';

import { ProvinsiPage } from './provinsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvinsiPageRoutingModule
  ],
  declarations: [ProvinsiPage]
})
export class ProvinsiPageModule {}
