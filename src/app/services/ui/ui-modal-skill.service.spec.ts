import { TestBed } from '@angular/core/testing';

import { UiModalSkillService } from './ui-modal-skill.service';

describe('UiModalSkillService', () => {
  let service: UiModalSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiModalSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
