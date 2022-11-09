import { TestBed } from '@angular/core/testing';

import { AcivityService } from './acivity.service';

describe('AcivityService', () => {
  let service: AcivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
