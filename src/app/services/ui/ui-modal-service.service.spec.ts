import { TestBed } from '@angular/core/testing';

import { UiModalServiceService } from './ui-modal-service.service';

describe('UiModalServiceService', () => {
  let service: UiModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
