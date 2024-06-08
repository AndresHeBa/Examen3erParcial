import { TestBed } from '@angular/core/testing';

import { NodeapodService } from './nodeapod.service';

describe('NodeapodService', () => {
  let service: NodeapodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeapodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
