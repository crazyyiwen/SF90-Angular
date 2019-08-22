import { TestBed } from '@angular/core/testing';

import { DataSupplyService } from './data-supply.service';

describe('DataSupplyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSupplyService = TestBed.get(DataSupplyService);
    expect(service).toBeTruthy();
  });
});
