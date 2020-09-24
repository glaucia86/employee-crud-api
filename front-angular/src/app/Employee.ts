/**
 * arquivo: app/Employee.ts
 * descrição: arquivo responsável por representar a classe 'Employee' no Front
 * data: 14/09/2020
 * author: Glaucia Lemos <@glaucia_lemos86>
 * Classes ts: https://www.typescriptlang.org/docs/handbook/classes.html
 */
import EmployeeDTO from './EmployeeDTO';

export default class Employee {
  employeeName: string;
  jobRole: string;
  salary: number;
  birth: Date;
  employeeRegistration: number;
}


