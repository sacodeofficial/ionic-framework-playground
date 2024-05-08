import { TestBed } from '@angular/core/testing';

import { WilayahService } from './wilayah.service';

describe('WilayahService', () => {
  let service: WilayahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WilayahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
