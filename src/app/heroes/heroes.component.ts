import { Component, OnInit, ViewChild } from '@angular/core';
import { GetHeroesService } from '../get-heroes.service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import {MatPaginatorModule, MatSortModule, MatTableDataSource} from '@angular/material';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age'];
  dataSource: MatTableDataSource<Hero>;

  heroes: Hero[];
  selectedHero: Hero;

 @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
 @ViewChild(MatSortModule) sort: MatSortModule;

constructor(private getHeroesService : GetHeroesService) { }

ngOnInit() {
  //this.heroes = HEROES;
  this.getHeroesService.getHeroes().subscribe(heroes => this.heroes = heroes.results.data );
  this.dataSource = new MatTableDataSource(this.heroes);
  /* this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort; */
}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
