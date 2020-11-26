/**
 * file: src/services/EmployeeService.js
 * data: 09/11/2020
 * description: arquivo responsável pelos métodos de requisições das Apís via HTTP
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import Api from './Api';

export default {
  /**
   * Método responsável por criar um novo(a) 'Employee'
   * (POST): localhost:3000/api/employees
   */
  async createNewEmployee(employee) {
    try {
      const response = await Api().post('/employees', employee);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por listar todos os 'Employees'
   * (GET): localhost:3000/api/employees
   */
  async getEmployees() {
    try {
      const response = await Api().get('/employees');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por Listar por Id um determinado 'Employee'
   * (GET): localhost:3000/api/employees/:id
   */
  async getEmployeeId(id) {
    try {
      const response = await Api().get(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por atualizar um determinado 'Employee' por Id
   * (PUT): localhost:3000/api/employees/:id
   */
  async updateEmployee(employee) {
    try {
      const id = employee.employee_id;
      const response = await Api().put(`/employees/${id}`, employee);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por excluir um determinado 'Employee' por Id
   * (DELETE): localhost:3000/api/employees/:id
   */
  async deleteEmployee(id) {
    try {
      const response = await Api().delete(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
