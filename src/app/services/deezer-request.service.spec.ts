import { TestBed } from '@angular/core/testing';

import { DeezerRequestService } from './deezer-request.service';

describe('DeezerRequestService', () => {
  let service: DeezerRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeezerRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
