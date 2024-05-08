import { Component } from '@angular/core';
import { WilayahService } from 'src/app/services/wilayah.service';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.page.html',
  styleUrls: ['./provinsi.page.scss'],
})
export class ProvinsiPage {

  constructor(
   private wilayahService: WilayahService
  ) { }

  provinsi!: any[]

  async ionViewDidEnter() {
    const provinsi = await this.wilayahService.provinsi();
    this.provinsi = provinsi;
  }
}
