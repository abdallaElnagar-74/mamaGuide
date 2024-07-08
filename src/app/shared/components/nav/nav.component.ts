import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth.module';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private _Router:Router,private _ActivatedRoute:ActivatedRoute,private _AuthService:AuthService){}

  click():void{
  if(this._AuthService.route.value !== 'login'){
    Swal.fire({
      title: "? Are you Doctor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        this._Router.navigate(['/auth'])
        Swal.fire({
          position: "center",
          icon: "success",
          title:'Welcome',
          showConfirmButton: false,
          timer: 1500
        });
        
      }
    });
    
  }
    
  }
}
