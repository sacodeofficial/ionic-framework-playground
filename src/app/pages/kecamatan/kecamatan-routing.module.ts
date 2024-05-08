import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KecamatanPage } from './kecamatan.page';

const routes: Routes = [
  {
    path: '',
    component: KecamatanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KecamatanPageRoutingModule {}
