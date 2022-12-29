import { TestBed } from '@angular/core/testing';

import { CreateCommandService } from './create-command.service';

describe('CreateCommandService', () => {
  let service: CreateCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
