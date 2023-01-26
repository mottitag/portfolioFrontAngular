import { TestBed } from '@angular/core/testing';

import { UiModalProjectService } from './ui-modal-project.service';

describe('UiModalProjectService', () => {
  let service: UiModalProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiModalProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
