/**
 * arquivo: app/Employee.ts
 * descrição: arquivo responsável por representar a classe 'Employee' no Front
 * data: 14/09/2020
 * author: Glaucia Lemos <@glaucia_lemos86>
 * Classes ts: https://www.typescriptlang.org/docs/handbook/classes.html
 */

export default class Employee {
  employee_id?: number; // Setamos o ID como opcional, para que seja possível re-utilizar a interface tanto para editar, quanto para o resto.
  name: string;
  job_role: string;
  salary: number;
  birth: Date;
  employee_registration: number;
}






