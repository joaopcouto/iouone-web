import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { NavbarCadastroComponent } from './shared/navbar-cadastro/navbar-cadastro.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    NavbarCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
