import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) {
    this.createForm();
  }

  createForm(): void {
    this.employeeForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      jobRole: ['', Validators.required],
      salary: ['', Validators.required],
      birth: ['', Validators.required],
      employeeRegistration: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  createNewEmployee(employeeName, jobRole, salary, birth, employeeRegistration) {
    this.employeeService.createNewEmployee(employeeName, jobRole, salary, birth, employeeRegistration);
  }

  ngOnInit(): void {
  }
}
