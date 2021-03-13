import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees.routing';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { SearchEmployeeComponent } from '../components/search-employee/search-employee.component';
import { NavMenuComponent } from '../components/nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    // EmployeesComponent,
    AddEmployeeComponent,
     SearchEmployeeComponent,
     NavMenuComponent,
  ],
  imports: [
     CommonModule,
     EmployeesRoutingModule,
     FormsModule,
     BsDatepickerModule.forRoot(),
     
  ]
})
export class EmployeesModule { }
