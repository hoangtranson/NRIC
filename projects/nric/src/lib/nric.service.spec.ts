import { TestBed } from '@angular/core/testing';

import { NricService } from './nric.service';

describe('NricService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NricService = TestBed.get(NricService);
    expect(service).toBeTruthy();
  });
});
