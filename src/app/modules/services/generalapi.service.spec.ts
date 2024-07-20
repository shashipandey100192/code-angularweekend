import { TestBed } from '@angular/core/testing';

import { GeneralapiService } from './generalapi.service';

describe('GeneralapiService', () => {
  let service: GeneralapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
