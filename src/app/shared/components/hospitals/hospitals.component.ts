import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Hospitals } from 'src/app/core/interfaces/doctors';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent {
constructor(private _DoctorService:DoctorService,private _ActivatedRoute:ActivatedRoute, private _AuthService:AuthService){}
ngOnInit(): void {
  this.getAllHospitals()
  const current = this._ActivatedRoute.snapshot.routeConfig?.path
  this._AuthService.route.next(current)
}
pags:number = 1000
pagen:number =1
searchValue : string = ''
hospitass:Hospitals[]=[]
getAllHospitals():void{
 let data:any = {
    Search : this.searchValue,
    PageNumber :this.pagen,
    PageSize : this.pags
  }
  this._DoctorService.getAllHospitals(data).subscribe({
    next:res=>{
      console.log(res);
      this.hospitass = res.value
    },
    error:err=>{
      console.log(err);
      
    }
  })
}
}
