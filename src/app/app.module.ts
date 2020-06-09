import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PackVerComponent } from './Packs/pack-ver/pack-ver.component';
import { PackCreComponent } from './Packs/pack-cre/pack-cre.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    FooterComponent,
    NavBarComponent,
    PackVerComponent,
    PackCreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
