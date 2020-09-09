import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  ngOnInit(): void {
  }
}
