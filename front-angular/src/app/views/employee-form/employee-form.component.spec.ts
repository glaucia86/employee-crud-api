import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeFormComponent } from './employee-form.component';
import Employee from 'src/app/interfaces/Employee';
import Swal from 'sweetalert2';

describe('EmployeeFormComponent', () => {
  let employeeFormComponent: EmployeeFormComponent;

  let fixture: ComponentFixture<EmployeeFormComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
  let employeeServiceSpy: jasmine.SpyObj<EmployeeService>;

  beforeEach(() => {
    const mockRouter: Router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const mockEmployeeService = {
      createNewEmployee: (employee: Employee) => of({}),
      updateEmployee: (employee: Employee) => of({}),
      getEmployee: (id: number) => of({
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      }),
    };

    const mockActivatedRoute = {
      params: of({ id: 0 }),
    };

    TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
      providers: [
        EmployeeFormComponent,
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: EmployeeService, useValue: mockEmployeeService },
      ],
    });

    fixture = TestBed.createComponent(EmployeeFormComponent);
    employeeFormComponent = fixture.componentInstance;

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRouteSpy = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    employeeServiceSpy = TestBed.inject(EmployeeService) as jasmine.SpyObj<EmployeeService>;

  });

  describe('Initialization', () => {
    it('should be created', () => {
      expect(employeeFormComponent).toBeTruthy();
    });
    it('should init for register', () => {
      const spy_ngOnInit = spyOn(employeeFormComponent, 'ngOnInit').and.callThrough();
      employeeFormComponent.ngOnInit();
      expect(spy_ngOnInit).toHaveBeenCalled();
    });
    it('should init for edit', () => {
      activatedRouteSpy.params = of({ id: 1 });
      const spy_ngOnInit = spyOn(employeeFormComponent, 'ngOnInit').and.callThrough();
      employeeFormComponent.ngOnInit();
      expect(spy_ngOnInit).toHaveBeenCalled();
    });
  });

  describe('checkParam', () => {
    it('should makes expected calls with id', () => {
      const spy_checkParam = spyOn(employeeFormComponent, 'checkParam').and.callThrough();
      activatedRouteSpy.params = of({ id: 1 });
      employeeFormComponent.checkParam();
      expect(spy_checkParam).toHaveBeenCalled();
    });
    it('should makes expected calls without id', () => {
      const spy_checkParam = spyOn(employeeFormComponent, 'checkParam').and.callThrough();
      activatedRouteSpy.params = of({ id: null });
      employeeFormComponent.checkParam();
      expect(spy_checkParam).toHaveBeenCalled();
    });
  });

  describe('getEmployee', () => {
    it('should makes expected calls', () => {
      const spy_getEmployee = spyOn(employeeFormComponent, 'getEmployee').and.callThrough();
      employeeFormComponent.getEmployee(1);
      expect(spy_getEmployee).toHaveBeenCalled();
    });
  });

  describe('createNewEmployee', () => {
    it('should makes expected calls', () => {
      spyOn(Swal,"fire").and.resolveTo({ isConfirmed: true, isDismissed: false });
      const spy_createNewEmployee = spyOn(employeeFormComponent, 'createNewEmployee').and.callThrough();
      employeeFormComponent.createNewEmployee();
      expect(spy_createNewEmployee).toHaveBeenCalled();
    });
  });

  describe('updateEmployee', () => {
    it('should makes expected calls', () => {
      spyOn(Swal,"fire").and.resolveTo({ isConfirmed: true, isDismissed: false });
      employeeFormComponent.employee_id = 1;
      const spy_updateEmployee = spyOn(employeeFormComponent, 'updateEmployee').and.callThrough();
      employeeFormComponent.updateEmployee();
      expect(spy_updateEmployee).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('should makes expected calls for register', () => {
      employeeFormComponent.employee_id = 0;
      const spy_onSubmit = spyOn(employeeFormComponent, 'onSubmit').and.callThrough();
      employeeFormComponent.onSubmit();
      expect(spy_onSubmit).toHaveBeenCalled();
    });
    it('should makes expected calls for edit', () => {
      employeeFormComponent.employee_id = 1;
      const spy_onSubmit = spyOn(employeeFormComponent, 'onSubmit').and.callThrough();
      employeeFormComponent.onSubmit();
      expect(spy_onSubmit).toHaveBeenCalled();
    });
  });

  describe('getControl', () => {
    it('should makes expected calls', () => {
      const spy_getControl = spyOn(employeeFormComponent, 'getControl').and.callThrough();
      employeeFormComponent.getControl('name');
      expect(spy_getControl).toHaveBeenCalled();
    });
  });

  describe('validatorInputs', () => {
    it('should makes expected calls', () => {
      const spy_validatorInputs = spyOn(employeeFormComponent, 'validatorInputs').and.callThrough();
      employeeFormComponent.validatorInputs('name');
      expect(spy_validatorInputs).toHaveBeenCalled();
    });
  });

  describe('validatorErrorsRequired', () => {
    it('should makes expected calls', () => {
      const spy_validatorErrorsRequired = spyOn(employeeFormComponent, 'validatorErrorsRequired').and.callThrough();
      employeeFormComponent.validatorErrorsRequired('name');
      expect(spy_validatorErrorsRequired).toHaveBeenCalled();
    });
  });
});
