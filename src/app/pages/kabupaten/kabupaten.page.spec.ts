import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KabupatenPage } from './kabupaten.page';

describe('KabupatenPage', () => {
  let component: KabupatenPage;
  let fixture: ComponentFixture<KabupatenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KabupatenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
