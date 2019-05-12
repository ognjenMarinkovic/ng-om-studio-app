import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HireComponent } from './hire/hire.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home' }},
  { path: 'portfolio', component: PortfolioComponent, data: { state: 'portfolio' }},
  { path: 'hire', component: HireComponent, data: { state: 'hire' }},
  { path: 'about', component: AboutComponent, data: { state: 'about' }},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: true
});