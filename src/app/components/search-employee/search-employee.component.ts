import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {

  empName = "";
  department = null; 

  departments = [
    {id:1 , name:'Admin'},
    {id:2 , name:'HR'},
    {id:3 , name:'UI/UX'},
    {id:4 , name:'Web Designer'},
    {id:5 , name:'Web Developer'},
    {id:6 , name:'Help Desk'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submitSearchEmp(form : NgForm){
        console.log(form)
  }
}
