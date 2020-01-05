import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriminalComponent } from './criminal/criminal.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriminalAddComponent } from './criminal-add/criminal-add.component';
import { CriminalEditComponent } from './criminal-edit/criminal-edit.component';
import { CriminalListComponent } from './criminal-list/criminal-list.component';
import { MaterialModule } from '../material';
const routes: Routes = [
    {
        path: '',
        component: CriminalComponent,
    },
];

@NgModule({
    declarations: [CriminalComponent, CriminalAddComponent, CriminalEditComponent, CriminalListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        //------------
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class CriminalsModule { }