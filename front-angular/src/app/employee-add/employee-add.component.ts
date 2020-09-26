import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

import Swal from 'sweetalert2';

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
      name: ['', Validators.required],
      job_role: ['', Validators.required],
      salary: ['', Validators.required],
      birth: ['', Validators.required],
      employee_registration: ['', Validators.required]
    });
  }

  /**
   * Método responsável por adicionar um novo 'Employee' --> ação do botão
   */
  createNewEmployee(name, job_role, salary, birth, employee_registration) {
    this.employeeService.createNewEmployee(name, job_role, salary, birth, employee_registration)
      .subscribe(res => {
        Swal.fire({
          title: 'Employee added successfully!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: true
        });

        this.employeeForm.reset();
      });
  }

  ngOnInit(): void {
  }
}
