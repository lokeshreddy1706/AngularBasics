import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { GetHeroesService } from './get-heroes.service';
import { MatPaginatorModule, MatTableModule, MatSortModule} from '@angular/material';
import { AddHeroesComponent } from './add-heroes/add-heroes.component';
import { DataTableComponent } from './data-table/data-table.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MaterialComponentsModule} from './material.module'; 
import 'hammerjs'; // <-- NgModel lives here
import { AdvancedlearningsComponent } from './advancedlearnings/advancedlearnings.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MaintenanceFormComponent } from './advancedlearnings/maintenance-form/maintenance-form.component';
import { FormArrayExampleComponent } from './advancedlearnings/form-array-example/form-array-example.component';
import { MaintenanceModal } from './advancedlearnings/maintenance-form/maintenance-form-model';
import { NgSelectModule } from '@ng-select/ng-select';
import { SortingComponent } from './advancedlearnings/sorting/sorting.component';
import {OrderByPipe} from './advancedlearnings/sorting/orderBy';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    AddHeroesComponent,
    routingComponents,
    AddHeroesComponent,
    DataTableComponent,
    AdvancedlearningsComponent,
    MaintenanceFormComponent,
    FormArrayExampleComponent,
    SortingComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialComponentsModule,
    MatPaginatorModule, 
    MatSortModule,
    MatTableModule,
    NgxSmartModalModule.forRoot(),
    NgSelectModule
    
  ],
  providers:[GetHeroesService, MaintenanceModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
