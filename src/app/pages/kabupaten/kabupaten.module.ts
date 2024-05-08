import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KabupatenPageRoutingModule } from './kabupaten-routing.module';

import { KabupatenPage } from './kabupaten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KabupatenPageRoutingModule
  ],
  declarations: [KabupatenPage]
})
export class KabupatenPageModule {}
