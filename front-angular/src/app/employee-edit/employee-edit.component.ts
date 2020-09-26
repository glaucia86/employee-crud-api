import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm: FormGroup;
  employee: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService,
              private formBuilder: FormBuilder) {

                this.createForm();
  }

  /**
   * Método responsável por criar um formulário ao entrar na página de Atualizar Funcionario(a):
   */
  createForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      job_role: ['', Validators.required],
      salary: ['', Validators.required],
      birth: ['', Validators.required],
      employee_registration: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeService.editEmployee(params.id).subscribe(res => {
        this.employee = res[0];

        this.employeeForm.setValue({
            name: this.employee.name,
            job_role: this.employee.job_role,
            salary: this.employee.salary,
            birth: this.employee.birth,
            employee_registration: this.employee.employee_registration
          });
      });
    });
  }

  /**
   * Método responsável por Atualizar o 'Employee' por Id através da action do botão 'Update'
   */
  updateEmployee(name, job_role, salary, birth, employee_registration) {
    this.route.params.subscribe(params => {
      this.employeeService.updateEmployee(name, job_role, salary, birth, employee_registration, params.id);
      // ==> Depois que o usuário clicar no botão 'Update', será redirecionado para a página de listar 'Employees'
      this.router.navigate(['employee']);

      Swal.fire({
        title: 'Employee updated successfully!',
        icon: 'success',
        showConfirmButton: true,
        timer: 1500
      });
    });
  }

}
