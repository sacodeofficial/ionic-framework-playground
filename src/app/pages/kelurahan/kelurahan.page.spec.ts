import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KelurahanPage } from './kelurahan.page';

describe('KelurahanPage', () => {
  let component: KelurahanPage;
  let fixture: ComponentFixture<KelurahanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KelurahanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
