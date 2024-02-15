import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfesionalComponent } from './components/profesional/profesional.component';
import { TimeComponent } from './components/time/time.component';
import { ServicesComponent } from './components/services/services.component';






const routes: Routes = [
  { path: 'Profesional', component: ProfesionalComponent },
  { path: 'Time', component: TimeComponent },
  { path: 'Services', component: ServicesComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ProfesionalComponent,
    TimeComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
