import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WelcomeComponent } from './welcome/welcome.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';

// Routing configuration
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'persons', loadChildren: () => import('./persons/persons.module').then(m=>m.PersonsModule) },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    RouterModule, MatFormFieldModule, MatInputModule
  ]
})
export class AppRoutingModule { }
