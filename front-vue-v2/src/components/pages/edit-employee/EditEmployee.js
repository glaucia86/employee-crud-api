/**
 * file: src/components/pages/edit-employee/EditEmployee.js
 * data: 23/11/2020
 * description: arquivo responsável pela lógica do componente
 *  'EditEmployeeComponent.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import EmployeeService from '../../../services/EmployeeService';

export default {
  name: 'EditEmployeeComponent',
  data() {
    return {
      employeeForm: {
      },
    };
  },

  mounted() {
    this.getEmployeeById();
  },

  methods: {
    async getEmployeeById() {
      const { id } = this.$route.params;
      const response = await EmployeeService.getEmployeeId(id);

      this.employeeForm = { ...response };
    },

    async updateEmployee() {
      await EmployeeService.updateEmployee({
        id: this.$route.params.id,
        name: this.name,
        job_role: this.job_role,
        salary: this.salary,
        employee_registration: this.employee_registration,
      });
      this.$router.push({ name: 'list' });
    },
  },
};
