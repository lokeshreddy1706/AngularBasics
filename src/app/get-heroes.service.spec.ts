import { TestBed, inject } from '@angular/core/testing';

import { GetHeroesService } from './get-heroes.service';

describe('GetHeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHeroesService]
    });
  });

  it('should be created', inject([GetHeroesService], (service: GetHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
