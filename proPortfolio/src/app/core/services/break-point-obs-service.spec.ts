import { TestBed } from '@angular/core/testing';
import { BreakPointObsService } from './break-point-obs-service';

describe('BreakPointObsService', () => {
  let service: BreakPointObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakPointObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
