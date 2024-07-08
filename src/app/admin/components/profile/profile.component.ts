import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private _AdminService:AdminService){
    console.log(localStorage.getItem('entryRole'));
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllAdmins()
    
    
  }
disabledd:boolean = true

getAllAdmins(){
  this._AdminService.getAllAdmins().subscribe({
    next:res=>{
      console.log(res);
      
    },
    error:err=>{
      console.log(err);
      
    }
  })
}
}
