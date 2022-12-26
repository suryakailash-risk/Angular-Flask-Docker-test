import { TestBed } from '@angular/core/testing';

import { CustomersigninService } from './customersignin.service';

describe('CustomersigninService', () => {
  let service: CustomersigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
