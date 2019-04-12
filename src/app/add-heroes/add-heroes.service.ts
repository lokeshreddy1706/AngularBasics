import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../model/hero.model';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AddHero } from '../model/add-hero.model';

@Injectable({
  providedIn: 'root'
})
export class AddHeroesService {

  heroesUrl : string = 'http://localhost:8080/heroes/add';
  addHeroes : AddHero;

  constructor(private httpClient : HttpClient) { } 

  addHero(hero: Hero): any {

   this.addHeroes = new AddHero([hero]);

   console.log(this.addHeroes);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post(this.heroesUrl, this.addHeroes, httpOptions);
  }
}
