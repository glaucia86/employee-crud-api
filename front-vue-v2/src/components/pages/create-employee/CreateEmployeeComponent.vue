<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add New Employee</h3>
      </div>
      <div class="card-body">
        <form @susubmit.prevent="createNewEmployee">
          <!-- INÍCIO BLOCO: Employee Name -->
          <div class="form-group">
            <label class="font-weight-bold" for="employee-name">Employee Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Type your Name"
              v-model="employee.name"
            />
          </div>
          <!-- FIM BLOCO: Employee Name -->

          <!-- INÍCIO BLOCO: Job Role -->
          <div class="form-group">
            <label class="font-weight-bold" for="job-role">Job Role</label>
            <input
              class="form-control"
              type="text"
              placeholder="Type your Job Role"
              v-model="employee.job_role"
            />
          </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INÍCIO BLOCO: Salary -->
          <div class="form-group">
            <label class="font-weight-bold" for="salary">Salary</label>
            <input
              class="form-control"
              type="number"
              placeholder="Type your Salary"
              v-model="employee.salary"
            />
          </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INÍCIO BLOCO: Birth -->
          <div class="form-group">
            <label class="font-weight-bold" for="birth">Birth</label>
            <input
              class="form-control"
              type="date"
              placeholder="YYYY/MM/DD/"
              v-model="employee.birth"
            />
          </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INÍCIO BLOCO: Employee Registration -->
          <div class="form-group">
            <label
              class="font-weight-bold"
              for="employee-registration">Employee Registration
            </label>
            <input
              class="form-control"
              type="text"
              placeholder="Type your Employee Registration"
              v-model="employee.employee_registration"
            />
          </div>
          <!-- FIM BLOCO: Employee Registration -->
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary">+ Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateEmployeeComponent',
  data() {
    return {
      employee: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {
      // TODO - Implementar a lógica do botão!
    },
  },
};
</script>
