import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WilayahService } from 'src/app/services/wilayah.service';

@Component({
  selector: 'app-kelurahan',
  templateUrl: './kelurahan.page.html',
  styleUrls: ['./kelurahan.page.scss'],
})
export class KelurahanPage {

  constructor(
    private route: ActivatedRoute,
    private wilayahService: WilayahService
  ) { }

  kecamatan!: any;
  kelurahan!: any[];

  async ionViewDidEnter() {
    const kecamatan_id = this.route.snapshot.paramMap.get('kecamatan_id');
    const kelurahan = await this.wilayahService.kelurahan(kecamatan_id);

    this.kecamatan = this.route.snapshot.paramMap.get('kecamatan_nama');
    this.kelurahan = kelurahan;
  }

}
