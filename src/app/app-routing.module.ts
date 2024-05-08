import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'provinsi',
    pathMatch: 'full'
  },
  {
    path: 'provinsi',
    loadChildren: () => import('./pages/provinsi/provinsi.module').then( m => m.ProvinsiPageModule)
  },
  {
    path: 'kabupaten/:provinsi_id/:provinsi_nama',
    loadChildren: () => import('./pages/kabupaten/kabupaten.module').then( m => m.KabupatenPageModule)
  },
  {
    path: 'kecamatan/:kabupaten_id/:kabupaten_nama',
    loadChildren: () => import('./pages/kecamatan/kecamatan.module').then( m => m.KecamatanPageModule)
  },
  {
    path: 'kelurahan/:kecamatan_id/:kecamatan_nama',
    loadChildren: () => import('./pages/kelurahan/kelurahan.module').then( m => m.KelurahanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
