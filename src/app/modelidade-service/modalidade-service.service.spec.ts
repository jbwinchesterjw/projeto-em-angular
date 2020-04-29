import { TestBed } from '@angular/core/testing';

import { ModalidadeServiceService } from './modalidade-service.service';

describe('ModalidadeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalidadeServiceService = TestBed.get(ModalidadeServiceService);
    expect(service).toBeTruthy();
  });
});
