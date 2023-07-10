import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  public employees: Employee[] = [];


  constructor(private employeeService: EmployeeService, private router: Router ) {

   }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (Response: Employee[]) => {
        this.employees = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter((employee) => employee.id !== id); // update employees array
      console.log(this.employees); // print updated employees array
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
}
