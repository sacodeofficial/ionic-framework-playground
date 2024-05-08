import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvinsiPage } from './provinsi.page';

const routes: Routes = [
  {
    path: '',
    component: ProvinsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvinsiPageRoutingModule {}
