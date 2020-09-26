/**
 * arquivo: employee-form.module.ts
 * descrição: arquivo responsável por representar o modulo do component EmployeeForm
 * data: 26/09/2020
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EmployeeFormComponent } from './employee-form.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeFormComponent,
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
  declarations: [EmployeeFormComponent],
  providers: [],
})
export class EmployeeFormModule { }
