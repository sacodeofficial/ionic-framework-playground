import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KecamatanPageRoutingModule } from './kecamatan-routing.module';

import { KecamatanPage } from './kecamatan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KecamatanPageRoutingModule
  ],
  declarations: [KecamatanPage]
})
export class KecamatanPageModule {}
