/**
 * arquivo: employee-list.module.ts
 * descrição: arquivo responsável por representar o modulo do component EmployeeList
 * data: 26/09/2020
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  exports: [RouterModule],
  declarations: [EmployeeListComponent],
  providers: [],
})
export class EmployeeListModule { }
