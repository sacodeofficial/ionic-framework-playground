import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KelurahanPage } from './kelurahan.page';

const routes: Routes = [
  {
    path: '',
    component: KelurahanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KelurahanPageRoutingModule {}
