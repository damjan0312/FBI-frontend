import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriminalComponent } from './criminals/criminal/criminal.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CriminalDetailComponent } from './criminals/criminal-detail/criminal-detail.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'mostWanted',
    loadChildren: '../app/criminals/criminals.module#CriminalsModule',

  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'mostWanted/details/:id',
    component: CriminalDetailComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
