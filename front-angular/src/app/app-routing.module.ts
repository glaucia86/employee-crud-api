import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Adicionado metodo LazyLoad para as rotas.
const routes: Routes = [
  {
    path: '', // Quando alguem entrar no site: http://localhost:4200/  vai ser redirecionado para http://localhost:4200/employees
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: () => import('./views/employee-list/employee-list.module').then((m) => m.EmployeeListModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./views/employee-form/employee-form.module').then((m) => m.EmployeeFormModule)
  },
  {
    path: 'employee/:id',
    loadChildren: () => import('./views/employee-form/employee-form.module').then((m) => m.EmployeeFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
