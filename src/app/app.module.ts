import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WorksComponent } from './works/works.component';
import { MeteoComponent } from './meteo/meteo.component';

// my inport
import { HttpClientModule  } from '@angular/common/http';
import { StyleByCategoryDirective } from './style-by-category.directive';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
    WorksComponent,
    MeteoComponent,
    StyleByCategoryDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
