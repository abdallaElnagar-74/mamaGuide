
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Doctors } from 'src/app/core/interfaces/doctors';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.scss']
})
export class ViewDoctorsComponent {
pageSizze:number = 10
pageNumberr:number =1
doctors:Doctors[]=[]
searchValue:string = ''
constructor(private _DoctorService:DoctorService,private _ActivatedRoute:ActivatedRoute,private _AuthService:AuthService){
  const current = this._ActivatedRoute.snapshot.routeConfig?.path
  this._AuthService.route.next(current)
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  this.getAllDoctors()
}
pageChanged(ee:any){
  console.log(ee

  );
  this.pageNumberr = ee
  this.getAllDoctors()
  
}
getAllDoctors():void{
  this._DoctorService.getAllDoctors(this.pageNumberr,this.pageSizze).subscribe({
    next:res=>{
      this.doctors = res.value
      console.log(
        res
      );
      
    },
    error:err=>{
      console.log(err);
      
    }
  })
}
}
