import { Component, OnInit } from '@angular/core';
// import { faSortDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDate = Date.now();
  userName = null;
  //  user = null ;
  users= [{
    id : 1,
    name:"Ahmed Mohamed Adel",
    imgUrl:'./../../../assets/images/ahmed.png'
  } , {
    id : 2,
    name:"Aya Ahmed Hassan",
    imgUrl:'./../../../assets/images/aya.png'
  } , {
    id : 3,
    name:"Mostafa Aly Ahmed",
    imgUrl:'./../../../assets/images/mostafa.png'
  }];

    
  selectedUser(selected_user : any){
     
       this.userName = selected_user.value ;
       let savedUserObject = this.users.filter(us => us.name === selected_user.value)
      //  console.log(savedUserObject);

       localStorage.setItem("USER", JSON.stringify(savedUserObject))
  }

  constructor() { 
  }

  ngOnInit(): void {
     
  }
  
}
