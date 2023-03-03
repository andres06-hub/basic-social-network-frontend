import { TestBed } from '@angular/core/testing';

import { LoginServices } from './services/login.services.service';

describe('ServicesService', () => {
  let service: LoginServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
