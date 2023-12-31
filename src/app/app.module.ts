import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeagueStandingComponent } from './components/league-standing/league-standing.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './components/history/history.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LeagueStandingComponent,
  },
  {
    path: 'standings',
    component: LeagueStandingComponent,
  },
  { path: 'history/:teamId', component: HistoryComponent },
];

@NgModule({
  declarations: [AppComponent, LeagueStandingComponent, HistoryComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
