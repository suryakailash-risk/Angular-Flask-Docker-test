import { TestBed } from '@angular/core/testing';

import { StaffsignupService } from './staffsignup.service';

describe('StaffsignupService', () => {
  let service: StaffsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
