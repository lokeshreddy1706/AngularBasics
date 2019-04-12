import { TestBed, inject } from '@angular/core/testing';

import { AddHeroesService } from './add-heroes.service';

describe('AddHeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddHeroesService]
    });
  });

  it('should be created', inject([AddHeroesService], (service: AddHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
