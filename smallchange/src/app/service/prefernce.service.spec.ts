import { TestBed } from '@angular/core/testing';

import { PrefernceService } from './prefernce.service';

describe('PrefernceService', () => {
  let service: PrefernceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrefernceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
