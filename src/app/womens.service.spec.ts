import { TestBed } from '@angular/core/testing';

import { WomensService } from './womens.service';

describe('WomensService', () => {
  let service: WomensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
