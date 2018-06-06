import { TestBed, inject } from '@angular/core/testing';

import { RecipeBankService } from './recipe-bank.service';

describe('RecipeBankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeBankService]
    });
  });

  it('should be created', inject([RecipeBankService], (service: RecipeBankService) => {
    expect(service).toBeTruthy();
  }));
});
