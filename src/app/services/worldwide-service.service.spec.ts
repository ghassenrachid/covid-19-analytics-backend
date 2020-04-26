import { TestBed } from '@angular/core/testing';

import { WorldwideService } from './worldwide-service.service';

describe('WorldwideService', () => {
  let service: WorldwideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldwideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
