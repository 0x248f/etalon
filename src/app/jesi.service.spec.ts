import { TestBed } from '@angular/core/testing';

import { JesiService } from './jesi.service';

describe('JesiService', () => {
  let service: JesiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JesiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
