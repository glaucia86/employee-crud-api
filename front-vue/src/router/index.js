import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: () => import('../components/pages/create-employee/CreateEmployeeComponent'),
  },
  {
    path: '/list-employees',
    name: 'List Employees',
    component: () => import('../components/pages/list-employee/ListComponent'),
  },
  {
    path: '/edit/:id',
    name: 'Update Employee',
    component: () => import('../components/pages/edit-employee/EditEmployeeComponent'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
