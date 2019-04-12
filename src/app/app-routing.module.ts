import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Route, Routes} from '@angular/router';
import { AddHeroesComponent } from './add-heroes/add-heroes.component';
import {HeroesComponent} from './heroes/heroes.component'
import { AdvancedlearningsComponent } from './advancedlearnings/advancedlearnings.component';
import { SortingComponent } from './advancedlearnings/sorting/sorting.component';

//creating URLs for components
const routelist:Routes=[
  {path:'', component:HeroesComponent},
  {path:'addHeroes', component:AddHeroesComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'advanced', component:AdvancedlearningsComponent},
  {path:'sort', component:SortingComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routelist,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [AddHeroesComponent,HeroesComponent, AdvancedlearningsComponent,SortingComponent]