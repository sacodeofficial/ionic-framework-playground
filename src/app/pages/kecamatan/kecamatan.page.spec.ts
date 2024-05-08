import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KecamatanPage } from './kecamatan.page';

describe('KecamatanPage', () => {
  let component: KecamatanPage;
  let fixture: ComponentFixture<KecamatanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KecamatanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
