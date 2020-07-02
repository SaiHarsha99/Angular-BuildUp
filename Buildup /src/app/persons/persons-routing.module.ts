import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonListComponent } from './person-list/person-list.component';
import { AuthGuardService } from './auth-guard.service';

// Child routes for persons page
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PersonListComponent }
    ],
    canActivate: [AuthGuardService]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsRoutingModule { }
