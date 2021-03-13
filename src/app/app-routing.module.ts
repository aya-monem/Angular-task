import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesModule } from './employees/employees.module';


const appRoutes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'home' , component : HomeComponent },
  {path : 'about' , component : AboutComponent },
  {path : 'employees' , loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)},
  // {path : '' , redirectTo : 'home' , pathMatch : 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    EmployeesModule
  ],

exports: [RouterModule]
})

export class AppRoutingModule { }
