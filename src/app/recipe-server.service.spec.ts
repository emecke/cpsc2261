import { TestBed, inject } from '@angular/core/testing';

import { RecipeServerService } from './recipe-server.service';

describe('RecipeServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeServerService]
    });
  });

  it('should be created', inject([RecipeServerService], (service: RecipeServerService) => {
    expect(service).toBeTruthy();
  }));
});
