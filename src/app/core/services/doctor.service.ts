import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private _HttpClient:HttpClient) { }
  getAllDoctors(pNum:number,pSize:number):Observable<any>{
   return this._HttpClient.get(`Doctor/get-all?pageNumber=${pNum}&PageSize=${pSize}`)
  }
  getAllHospitals(data:any):Observable<any>{
    return this._HttpClient.get('hospitals',{params:data})
  }
}
