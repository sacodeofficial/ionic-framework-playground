import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvinsiPage } from './provinsi.page';

describe('ProvinsiPage', () => {
  let component: ProvinsiPage;
  let fixture: ComponentFixture<ProvinsiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
