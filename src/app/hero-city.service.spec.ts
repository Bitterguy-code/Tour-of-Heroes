import { TestBed } from '@angular/core/testing';

import { HeroCityService } from './hero-city.service';

describe('HeroCityService', () => {
  let service: HeroCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
