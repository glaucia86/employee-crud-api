<template>
  <div>
    <h3 class="text-center">List All Employees</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Employee Name</th>
          <th class="text-center">Job Role</th>
          <th class="text-center">Salary</th>
          <th class="text-center">Birth</th>
          <th class="text-center">Employee Registration</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.employee_id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.job_role }}</td>
          <td>{{ employee.salary }}</td>
          <td>{{ employee.birth }}</td>
          <td>{{ employee.employee_registration }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: employee.employee_id } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'user-edit']" /> Edit
            </router-link>
          </td>
          <td>
            <button @click="removeEmployee(employee.employee_id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" /> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./ListEmployee.js"></script>

<style src="" scoped></style>
