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

    async updateFormEmployee() {
      // Chamada do service passando as propriedades por meio do 'employeeForm' (funciona)
      await EmployeeService.updateEmployee(this.employeeForm);
      this.$swal({
        title: 'Employee updated successfully!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.$router.push({
          name: 'list',
        });
      });
    },
  },
};
