import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriminalComponent } from './criminals/criminal/criminal.component';



const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: 'mostWanted',
    loadChildren: '../app/criminals/criminals.module#CriminalsModule',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
