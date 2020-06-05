import { TestBed } from '@angular/core/testing';

import { MensService } from './mens.service';

describe('MensService', () => {
  let service: MensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
