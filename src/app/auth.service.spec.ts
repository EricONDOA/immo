import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {expect} from '@angular/core/testing/src/testing_internal';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
