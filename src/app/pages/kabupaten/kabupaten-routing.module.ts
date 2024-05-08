import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KabupatenPage } from './kabupaten.page';

const routes: Routes = [
  {
    path: '',
    component: KabupatenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KabupatenPageRoutingModule {}
