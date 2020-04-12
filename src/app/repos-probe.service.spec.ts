import { TestBed } from '@angular/core/testing';

import { ReposProbeService } from './repos-probe.service';

describe('ReposProbeService', () => {
  let service: ReposProbeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposProbeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
