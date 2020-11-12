// @ts-nocheck
/**
 * file: src/components/pages/list-employee/ListEmployee.js
 * data: 11/11/2020
 * description: arquivo responsável pela lógica do componente
 *  ListEmployeeComponent.vue'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import EmployeeService from '../../../services/EmployeeService';

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

    async removeEmployee(id) {
      this.$swal({
        title: 'Are you sure you want to delete the employee?',
        text: 'Watch out! This Employee will be deleted!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes! Please, delete it!',
      }).then(async (result) => {
        if (result.value) {
          await EmployeeService.deleteEmployee(id);
          this.$swal('Deleted', 'Successfully deleted', 'success');
          this.listAllEmployees();
        } else {
          this.$swal('Cancelled', 'Cancel deletion', 'info');
        }
      });
    },
  },
};
