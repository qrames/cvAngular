import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologiesComponent } from './technologies/technologies.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MeteoComponent } from './meteo/meteo.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'accueil',   component: AccueilComponent, data: { animation: 'accueil' }  },
    { path: 'works',   component: WorksComponent, data: { animation: 'works' }  },
    { path: 'contact',   component: ContactComponent, data: { animation: 'contact' }  },
    { path: 'weather',   component: MeteoComponent, data: { animation: 'meteo' }  },
    { path: 'technologies',   component: TechnologiesComponent, data: { animation: 'technologies'} },
    { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
