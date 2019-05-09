import { TestBed } from '@angular/core/testing';

import { ClientResolverService } from './client-resolver.service';

describe('ClientResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientResolverService = TestBed.get(ClientResolverService);
    expect(service).toBeTruthy();
  });
});
