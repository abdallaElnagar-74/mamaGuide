import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  eye:boolean=false
  hospitals:any[]=[]
  constructor(private _AuthService:AuthService,private _FormBuilder:FormBuilder,private _Router:Router){}
  ngOnInit(): void {
    // this.getHospitals()
    console.log(this.hospitals);
    
  }
  registerForm:FormGroup = this._FormBuilder.group({
    firstName:[''],
    lastName:[''],
    city:[''],
    governorate:[''],
    gender:[''],
    phoneNumber:[''],
    password:[''],
  })
  // getHospitals(){
  //   this.registerForm.value.gender = Boolean(this.registerForm.value.gender)
  //   this._AuthService.getAllHospitals().subscribe({
  //     next:res=>{
  //       console.log(res.value);
        
  //     },
  //     error:err=>{
  //       console.log(err);
        
  //     }
  //   })
  // }
  handleRegister(){
    this.registerForm.value.gender = Boolean(this.registerForm.value.gender)
    this._AuthService.Register(this.registerForm.value).subscribe({
      next:res=>{
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.value,
          showConfirmButton: false,
          timer: 1500
        });
        this._Router.navigate(['/auth'])
      },
      error: err=>{
        console.log(err);
        
      }
    })
  }
}
