/**
 * arquivo: app/employee.service.ts
 * descrição: arquivo responsável por realizar as transições de request entre o Back -> Front
 * data: 14/09/2020
 * author: Glaucia Lemos <@glaucia_lemos86>
 * Doc HttpClient Angular: https://angular.io/api/common/http/HttpClient#http-request-example
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Employee from '../interfaces/Employee';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Método responsável por criar um 'New Employee'
   */
  createNewEmployee(employee: Employee): Observable<any> {
    // ==> (POST - url no Back-End): http://locahost:3000/api/employees
    return this.http.post(`${environment.baseUrl}/employees`, employee);
  }

  /**
   * Método responsável por listar todos os 'Employees'
   */
  getEmployees(): Observable<any> {
    // ==> (GET - Url no Back-End): http://localhost:3000/api/employees
    return this.http.get(`${environment.baseUrl}/employees`);
  }

  /**
   * Método responsável por Atualizar um determinado 'Employee' por Id
   */
  getEmployee(id: number): Observable<any> {
    // ==> (GET - Url no Back-End): http://localhost:3000/api/employees/:id
    return this.http.get(`${environment.baseUrl}/employees/${id}`);
  }

  /**
   * Método responsável pela action do botão Update no arquivo 'employee-edit.component.html'
   */
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(`${environment.baseUrl}/employees/${employee.employee_id}`, employee);
  }

  /**
   * Método responsável por excluir um 'Employee' pelo id:
   */
  deleteEmployee(id: number): Observable<any> {
    // ==> (DELETE - Url no Back-End): http://localhost:3000/api/employees/:id
    return this.http.delete(`${environment.baseUrl}/employees/${id}`);
  }
}
