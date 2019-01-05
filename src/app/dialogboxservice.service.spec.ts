import { TestBed, inject } from '@angular/core/testing';

import { DialogboxserviceService } from './dialogboxservice.service';

describe('DialogboxserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogboxserviceService]
    });
  });

  it('should be created', inject([DialogboxserviceService], (service: DialogboxserviceService) => {
    expect(service).toBeTruthy();
  }));
});
