import { TestBed } from '@angular/core/testing';

import { TechnologiesSortService } from './technologies-sort.service';

describe('TechnologiesSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnologiesSortService = TestBed.get(TechnologiesSortService);
    expect(service).toBeTruthy();
  });
});
