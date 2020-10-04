import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import Employee from '../interfaces/Employee';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const mockHttpClient = jasmine.createSpyObj<HttpClient>('HttpClient', [ 'get', 'post', 'put', 'delete' ]);
    TestBed.configureTestingModule({
      providers: [
        EmployeeService,
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    });
    employeeService = TestBed.inject(EmployeeService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(employeeService).toBeTruthy();
  });

  describe('createNewEmployee', () => {
    it('should make expected calls', () => {
      httpClientSpy.post.and.resolveTo();
      const spy_createNewEmployee = spyOn(employeeService, 'createNewEmployee').and.callThrough();
      const employee = new Employee();
      employeeService.createNewEmployee(employee);
      expect(spy_createNewEmployee).toHaveBeenCalled();
    });
  });

  describe('getEmployees', () => {
    it('should make expected calls', () => {
      httpClientSpy.post.and.resolveTo();
      const spy_getEmployees = spyOn(employeeService, 'getEmployees').and.callThrough();
      employeeService.getEmployees();
      expect(spy_getEmployees).toHaveBeenCalled();
    });
  });

  describe('getEmployee', () => {
    it('should make expected calls', () => {
      httpClientSpy.post.and.resolveTo();
      const spy_getEmployee = spyOn(employeeService, 'getEmployee').and.callThrough();
      employeeService.getEmployee(1);
      expect(spy_getEmployee).toHaveBeenCalled();
    });
  });

  describe('updateEmployee', () => {
    it('should make expected calls', () => {
      httpClientSpy.post.and.resolveTo();
      const spy_updateEmployee = spyOn(employeeService, 'updateEmployee').and.callThrough();
      const employee = new Employee();
      employeeService.updateEmployee(employee);
      expect(spy_updateEmployee).toHaveBeenCalled();
    });
  });

  describe('deleteEmployee', () => {
    it('should make expected calls', () => {
      httpClientSpy.post.and.resolveTo();
      const spy_deleteEmployee = spyOn(employeeService, 'deleteEmployee').and.callThrough();
      employeeService.deleteEmployee(1);
      expect(spy_deleteEmployee).toHaveBeenCalled();
    });
  });
});
