import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, MatInputModule, AppRoutingModule,MatFormFieldModule],
    declarations: [AppComponent, WelcomeComponent, LoginComponent, GuestComponent],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        MatInputModule,MatFormFieldModule
    ]
})
export class AppModule { }
