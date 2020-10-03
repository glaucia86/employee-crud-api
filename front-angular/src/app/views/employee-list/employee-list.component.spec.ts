import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeListComponent } from './employee-list.component';
import Employee from 'src/app/interfaces/Employee';
import Swal from 'sweetalert2';

describe('EmployeeListComponent', () => {
  let employeeListComponent: EmployeeListComponent;

  let fixture: ComponentFixture<EmployeeListComponent>;
  let employeeServiceSpy: jasmine.SpyObj<EmployeeService>;

  beforeEach(() => {
    const mockEmployeeService = {
      createNewEmployee: (employee: Employee) => of({}),
      updateEmployee: (employee: Employee) => of({}),
      deleteEmployee: (id: number) => of({}),
      getEmployee: (id: number) => of({
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      }),
      getEmployees: () => of([])
    };

    TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
      providers: [
        EmployeeListComponent,
        { provide: EmployeeService, useValue: mockEmployeeService },
      ],
    });

    fixture = TestBed.createComponent(EmployeeListComponent);
    employeeListComponent = fixture.componentInstance;

    employeeServiceSpy = TestBed.inject(EmployeeService) as jasmine.SpyObj<EmployeeService>;
  });

  describe('Initialization', () => {
    it('should be created', () => {
      expect(employeeListComponent).toBeTruthy();
    });
    it('should init', () => {
      const spy_ngOnInit = spyOn(employeeListComponent, 'ngOnInit').and.callThrough();
      employeeListComponent.ngOnInit();
      expect(spy_ngOnInit).toHaveBeenCalled();
    });
  });

  describe('identify', () => {
    it('should makes expected calls without item', () => {
      const spy_identify = spyOn(employeeListComponent, 'identify').and.callThrough();
      employeeListComponent.identify(0, null);
      expect(spy_identify).toHaveBeenCalled();
    });
    it('should makes expected calls with item', () => {
      const spy_identify = spyOn(employeeListComponent, 'identify').and.callThrough();
      const employee = { employee_id: 1 } as Employee;
      employeeListComponent.identify(0, employee);
      expect(spy_identify).toHaveBeenCalled();
    });
  });

  describe('deleteEmployee', () => {
    it('should makes expected calls with dismiss', () => {
      spyOn(Swal,"fire").and.returnValue(Promise.resolve({ isConfirmed: false, isDismissed: true, dismiss: Swal.DismissReason.cancel }));
      const spy_deleteEmployee = spyOn(employeeListComponent, 'deleteEmployee').and.callThrough();
      employeeListComponent.deleteEmployee(1);
      expect(spy_deleteEmployee).toHaveBeenCalled();
    });
    it('should makes expected calls with confirm', () => {
      spyOn(Swal,"fire").and.returnValue(Promise.resolve({ isConfirmed: true, isDismissed: false }));
      const spy_deleteEmployee = spyOn(employeeListComponent, 'deleteEmployee').and.callThrough();
      employeeListComponent.deleteEmployee(1);
      expect(spy_deleteEmployee).toHaveBeenCalled();
    });
  });

});
