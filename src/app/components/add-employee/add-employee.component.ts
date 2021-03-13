import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
      // initial values
    empName = "";
    department = null;
    empCode = null;
    dateOfBirth = new Date;
    gender = "" ;

    employee :any = {};
  
   departments = [
     {id:1 , name:'Admin'},
     {id:2 , name:'HR'},
     {id:3 , name:'UI/UX'},
     {id:4 , name:'Web Designer'},
     {id:5 , name:'Web Developer'},
     {id:6 , name:'Help Desk'}
   ];
   
         // check that employee code input field accepts only positive numbers

   checkPositiveNum(event : KeyboardEvent) : boolean {
     let code;
    
    if (event.keyCode !== undefined) {
      code = event.keyCode;
        if( code > 47 && code < 58 ){
          console.log(code)
          return true
        
        }
        else {
          console.log("only positive numbers allowed!")
          return false
        }
    } 
     return false

   }

  submitAddEmp(form : NgForm){
      
    this.employee = Object.assign(this.employee , form.value);
    
          //  adding to local storage
    this.addNewEmployeeToLocalStorage(this.employee)
    form.reset()
        
  }

     addNewEmployeeToLocalStorage(emp : any){
      let employees = [];
        let  storageData = localStorage.getItem('Employees')
       if(storageData){
          employees = JSON.parse(storageData)
          employees = [...employees , emp]
       }
       else {
         employees = [emp];
         console.log(employees)
       }

       localStorage.setItem('Employees', JSON.stringify(employees));
       console.log(localStorage.getItem('Employees'))
     }

  constructor() { 
    // console.log(localStorage.getItem('Employees'))
  }
      
  ngOnInit(): void {
  }

}
