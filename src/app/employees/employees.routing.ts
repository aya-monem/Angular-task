import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from '../components/nav-menu/nav-menu.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { SearchEmployeeComponent } from '../components/search-employee/search-employee.component';


const employeesRoutes: Routes = [
  {path : '' , component : NavMenuComponent },
  {path : 'add-employee' , component : AddEmployeeComponent },
  {path : 'search-employee' , component : SearchEmployeeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(employeesRoutes)],

  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
