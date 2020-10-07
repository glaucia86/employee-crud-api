<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body">
      <form v-on:submit.prevent="handleSubmitForm()">

        <!-- INÍCIO BLOCO: Employee Name -->
        <div class="form-group">
          <label class="font-weight-bold">Employee Name</label>
          <input type="text"
            class="form-control"
            placeholder="Type Your Name"
            v-model="employee.name" required
          >
        </div>
        <!-- FIM BLOCO: Employee Name -->

        <!-- INÍCIO BLOCO: Job Role -->
        <div class="form-group">
          <label class="font-weight-bold">Job Role</label>
          <input type="text"
            class="form-control"
            placeholder="Type Your Job Role"
            v-model="employee.job_role"
            required
          >
        </div>
        <!-- FIM BLOCO: Job Role -->

        <!-- INÍCIO BLOCO: Salary -->
        <div class="form-group">
          <label class="font-weight-bold">Salary</label>
          <input type="number"
            class="form-control"
            placeholder="Type Your Salary"
            v-model="employee.salary"
            required
          >
        </div>
        <!-- FIM BLOCO: Salary -->

        <!-- INÍCIO BLOCO: Birth -->
        <div class="form-group">
          <label class="font-weight-bold">Birth</label>
          <input type="date"
            class="form-control"
            placeholder="YYYY/MM/DD"
            v-model="birth"
            required
          >
        </div>
        <!-- FIM BLOCO: Birth -->

        <!-- INÍCIO BLOCO: Employee Registration -->
        <div class="form-group">
          <label class="font-weight-bold">Employee Registration</label>
          <input type="text"
            class="form-control"
            placeholder="Employee Registration"
            v-model="employee_registration"
            required
          >
        </div>
        <!-- FIM BLOCO: Employee Registration -->
        <div class="form-group">
          <button class="btn btn-primary" type="submit">+ Employee</button>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: 'CreateEmployeeComponent',
  },
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
    handleSubmitForm() {},
  },
};
</script>
