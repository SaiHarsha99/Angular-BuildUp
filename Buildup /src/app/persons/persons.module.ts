import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonsRoutingModule } from './persons-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from './persons.service';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonsRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [PersonListComponent],
  providers: [PersonService, AuthGuardService],
  exports: [ MatFormFieldModule, MatInputModule ]
})
export class PersonsModule { }
