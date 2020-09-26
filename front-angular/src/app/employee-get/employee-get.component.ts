import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import Employee from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
  }

  /**
   * Método responsável por excluir um 'Employee' pelo Id
   */
  deleteEmployee(id: any) {
    Swal.fire({
      title: 'Are you sure you want to delete the employee?',
      text: 'Watch out! This Employee will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes! Please, delete it!'
    }).then((result) => {
      if (result.value === true) {
        this.employeeService.deleteEmployee(id).subscribe(res => {
          const index = this.employees.indexOf(id);
          this.employees.splice(index, 1);
          Swal.fire(
            'Deleted it!',
            'Employee was deleted it!',
            'success'
          );
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancel!',
          'Returning to the Employees List',
          'error'
        );
      }
    });
  }

}
