import { HttpClient } from '@angular/common/http'; // Import HTTP Client Module
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WilayahService {

  private base_url: string = 'https://ibnux.github.io/data-indonesia'; // Base URL API Ibnux sebagai endpoint data wilayah di Indonesia

  constructor(
    private http: HttpClient
  ) { }

  // Fungsi untuk request ambil data provinsi
  provinsi(): Promise<any> {
    const request = this.http.get(`${this.base_url}/provinsi.json`);
    return firstValueFrom(request);
  }

  // Fungsi untuk request data kabupaten berdasarkan ID provinsi;
  kabupaten(provinsi: any): Promise<any> {
    const request = this.http.get(`${this.base_url}/kabupaten/${provinsi}.json`);
    return firstValueFrom(request);
  }

  // Fungsi untuk request data kecamatan berdasarkan ID kabupaten
  kecamatan(kabupaten: any): Promise<any> {
    const request = this.http.get(`${this.base_url}/kecamatan/${kabupaten}.json`);
    return firstValueFrom(request);
  }

  // Fungsi untuk request data keluarahan berdasarkan ID kecamatan
  kelurahan(kecamatan: any): Promise<any> {
    const request = this.http.get(`${this.base_url}/kelurahan/${kecamatan}.json`);
    return firstValueFrom(request);
  }
}
