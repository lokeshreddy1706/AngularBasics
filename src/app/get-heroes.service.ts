import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseView } from './model/response';

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {

  heroesUrl: string = 'http://localhost:8080/heroes/details';

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<ResponseView> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.get<ResponseView>(this.heroesUrl, httpOptions);

  }
}
