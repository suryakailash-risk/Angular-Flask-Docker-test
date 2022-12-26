import { TestBed } from '@angular/core/testing';

import { AdminoperationsService } from './adminoperations.service';

describe('AdminoperationsService', () => {
  let service: AdminoperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminoperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
