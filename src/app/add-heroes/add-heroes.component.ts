import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddHeroesService } from './add-heroes.service';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styleUrls: ['./add-heroes.component.css'],
  providers:[AddHeroesService]
})

@Injectable()
export class AddHeroesComponent implements OnInit {

  private hero: Hero;

  addHeroesForm = this.formBuilder.group({
    firstName : ['', Validators.required],
    lastName : new FormControl(''),
    age : ['', Validators.required],
    gender : ['', Validators.required],
    state : new FormControl(''),
    city : new FormControl('')
  })
 
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private addHeroService: AddHeroesService) { }

  ngOnInit() {
  }

  saveData():void {
    this.hero = this.addHeroesForm.value;
    this.addHeroService.addHero(this.hero)
  }
}
