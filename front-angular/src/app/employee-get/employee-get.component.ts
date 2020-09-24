import { Component, OnInit } from '@angular/core';
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

}
