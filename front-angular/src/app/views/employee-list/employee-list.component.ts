import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import Employee from '../../interfaces/Employee';
import { EmployeeService } from '../../services/employee.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  icons = {
    faTrash,
    faEdit
  }

  // Sempre iniciar uma variavel já com um valor padrão
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    // Nunca coloque regra de negócio na função "geral" da classe, sempre faça ela chamar metodos com as regras de negócio.
    this.getEmployees();
  }

  /**
   * Método para identificação do trackBy do ngFor da Lista dinamica.
   *
   * @param URL: https://angular.io/api/common/NgForOf#ngForTrackBy
   *
   * A function that defines how to track changes for items in the iterable.
   * When items are added, moved, or removed in the iterable,
   * the directive must re-render the appropriate DOM nodes.
   * To minimize churn in the DOM, only nodes that have changed are re-rendered.
   */
  identify(index: number, item: Employee): number {
    return item?.employee_id;
  }

  /**
   * Método responsavel para resgatar todos 'Employees' do banco de dados.
   */
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  /**
   * Método responsável por excluir um 'Employee' pelo Id
   */
  deleteEmployee(id: number): void {
    // ==> Perguntar se o usuario quer realmente deletar..
    Swal.fire({
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
      confirmButtonText: 'Yes! Please, delete it!'
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) { // ==> Detectar se a pergunta acima foi recusada
        Swal.fire({
          title: 'Cancel!',
          text: 'Returning to the Employees List',
          icon: 'error',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        });
      } else { // Se a pergunta foi aceita entao...
        this.employeeService.deleteEmployee(id).subscribe(res => {
          Swal.fire({
            title: 'Deleted it!',
            text: 'Employee was deleted it!',
            icon: 'success',
            showConfirmButton: true,
            allowOutsideClick: false,
            allowEnterKey: true,
            allowEscapeKey: false,
          });
          this.getEmployees(); // ==> Renovar a lista.
        });
      }
    });
  }

}
