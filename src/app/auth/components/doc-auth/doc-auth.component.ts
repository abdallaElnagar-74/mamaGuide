import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Hospitals } from 'src/app/core/interfaces/doctors';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-auth',
  templateUrl: './doc-auth.component.html',
  styleUrls: ['./doc-auth.component.scss']
})
export class DocAuthComponent {
  eye:boolean=false
  hospitals:Hospitals[]=[]
  constructor(private _FormBuilder:FormBuilder,private _DoctorService:DoctorService,private _AuthService:AuthService,private _Router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllHospitas()
  }
  registerForm:FormGroup = this._FormBuilder.group({
    firstName:[''],
    lastName:[''],
    city:[''],
    governorate:[''],
    gender:[''],
    phoneNumber:[''],
    password:[''],
    hospitalId:[''],
    specialization:['']
  })
  getAllHospitas():void{
    let data = {
      pageSize:10000,
      pageNumber:1
    }
    this._DoctorService.getAllHospitals(data).subscribe({
      next:res=>{
        console.log(res);
        this.hospitals = res.value
        
      },error:err=>{
        console.log(err);
        
      }
    })
  }
  register(){
    this.registerForm.value.gender = Boolean(this.registerForm.value.gender)
    this._AuthService.registerDoctor(this.registerForm.value).subscribe({
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
        
      },error:err=>{
        console.log(err);
        
      }
    })
  }
}
