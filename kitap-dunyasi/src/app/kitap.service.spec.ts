import { TestBed } from '@angular/core/testing';

import { KitapService } from './kitap.service';

describe('KitapService', () => {
  let service: KitapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
