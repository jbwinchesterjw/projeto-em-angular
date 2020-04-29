import { TestBed } from '@angular/core/testing';

import { TurmaServiceService } from './turma-service.service';

describe('TurmaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurmaServiceService = TestBed.get(TurmaServiceService);
    expect(service).toBeTruthy();
  });
});
