import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { Employee } from '../model/employee.model';


@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = 'http://localhost:8090/api';

  

  public getEmployees() {
    return this.http.get(this.baseUrl+'/employees');
  }

  getEmployeeById(id: number){
    return this.http.get(this.baseUrl+'/employees/'+ id);
  }

  createEmployee(employee: Employee){
    return this.http.post(this.baseUrl+'/employees', employee);
  }

  updateEmployee(id: number, employee: Employee){
    return this.http.put(this.baseUrl +'/employees/'+ employee.id, employee);
  }

  deleteEmployee(id: number){
    return this.http.delete(this.baseUrl +'/employees/'+ id);
  }
}