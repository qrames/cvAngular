import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule  } from '@angular/common/http';


import { TechnologiesComponent } from './technologies/technologies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { StyleByCategoryDirective } from './technologies/category/style-by-category.directive';
import { AccueilComponent } from './accueil/accueil.component';
import { WorksComponent } from './works/works.component';
import { MeteoComponent } from './meteo/meteo.component';
import { ContactComponent } from './contact/contact.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TechnologiesComponent,
    StyleByCategoryDirective,
    AccueilComponent,
    WorksComponent,
    MeteoComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
