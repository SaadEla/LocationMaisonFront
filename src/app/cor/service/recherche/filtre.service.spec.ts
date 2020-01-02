import { TestBed } from '@angular/core/testing';

import { FiltreService } from './filtre.service';

describe('FiltreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltreService = TestBed.get(FiltreService);
    expect(service).toBeTruthy();
  });
});
