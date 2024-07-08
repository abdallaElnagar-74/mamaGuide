import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  eye:boolean=false
  constructor(private _AuthService:AuthService,private _FormBuilder:FormBuilder,private _Router:Router,private _ActivatedRoute:ActivatedRoute){

      const currentRoute = this._ActivatedRoute.snapshot.routeConfig?.path
      // console.log(currentRoute);
      this._AuthService.route.next(currentRoute)
      console.log('route is',this._AuthService.route.value);
      
    
  }

  loginForm:FormGroup = this._FormBuilder.group({
    phoneNumber:[''],
    password:['']
  })
  handleLogin(){
    console.log(this.loginForm.value);
    
    this._AuthService.Login(this.loginForm.value).subscribe({
      next:res=>{
        console.log(res);
       
        
      },
      error:err=>{
        Swal.fire({
          position: "center",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(err);
        console.log(err.error.text);
        localStorage.setItem('adminToken',err.error.text)
        this._AuthService.decodedToken()
        if(this._AuthService.role == 'Admin'){
          this._Router.navigate(['/admin'])
        }
        else if (this._AuthService.role == 'Doctor'){
          this._Router.navigate(['/doctor'])
        }
      }
    })
  }
}
