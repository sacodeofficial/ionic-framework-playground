import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WilayahService } from 'src/app/services/wilayah.service';

@Component({
  selector: 'app-kabupaten',
  templateUrl: './kabupaten.page.html',
  styleUrls: ['./kabupaten.page.scss'],
})
export class KabupatenPage {

  constructor(
    private route: ActivatedRoute,
    private wilayahService: WilayahService
  ) { }

  kabupaten!: any[];
  provinsi!: any;

  async ionViewDidEnter() {
    const provinsi_id = this.route.snapshot.paramMap.get('provinsi_id');
    const kabupaten = await this.wilayahService.kabupaten(provinsi_id);

    this.provinsi = this.route.snapshot.paramMap.get('provinsi_nama');
    this.kabupaten = kabupaten;
  }
}
