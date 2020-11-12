// @ts-nocheck
/**
 * file: src/components/pages/list-employee/ListEmployee.js
 * data: 11/11/2020
 * description: arquivo responsável pela lógica do componente
 *  ListEmployeeComponent.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import EmployeeService from '@/services/EmployeeService';

export default {
  name: 'ListEmployeeComponent',
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.listAllEmployees();
  },
  methods: {
    async listAllEmployees() {
      const response = await EmployeeService.getEmployees();
      this.employees = response;
    },
  },
};
