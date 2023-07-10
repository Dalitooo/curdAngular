import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Route,Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee = new Employee();
  submitted = false;
  constructor(private employeeService:EmployeeService,private router:Router)
  {

  }
  onSubmit() {
    this.submitted = true;
    this.employeeService.createEmployee(this.employee).subscribe(data => console.log(data),(error: HttpErrorResponse) => {
      alert(error.message);
    });
    this.employee = new Employee();
    this.router.navigate(['/employees']);
  }

}
