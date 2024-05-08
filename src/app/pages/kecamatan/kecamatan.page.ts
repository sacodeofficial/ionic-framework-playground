import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WilayahService } from 'src/app/services/wilayah.service';

@Component({
  selector: 'app-kecamatan',
  templateUrl: './kecamatan.page.html',
  styleUrls: ['./kecamatan.page.scss'],
})
export class KecamatanPage {

  constructor(
    private route: ActivatedRoute,
    private wilayahService: WilayahService
  ) { }

  kabupaten!: any;
  kecamatan!: any[];

  async ionViewDidEnter() {
    const kabupaten_id = this.route.snapshot.paramMap.get('kabupaten_id');
    const kecamatan = await this.wilayahService.kecamatan(kabupaten_id);

    this.kabupaten = this.route.snapshot.paramMap.get('kabupaten_nama');
    this.kecamatan = kecamatan;
  }
}
