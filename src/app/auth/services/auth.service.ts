import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { decoded } from 'src/app/core/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _ActivatedRoute:ActivatedRoute) { 
    if(localStorage.getItem('adminToken')!=null){
      this.decodedToken()
      this.getRole()
      }

      // console.log(this.route.value);
      
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
 
  }

  route = new BehaviorSubject<any>('')
  role:any = ''
  userID:any = ''
  Register(data:any):Observable<any>{
    return this._HttpClient.post('Admin/create',data)
  }
  Login(data:any):Observable<any>{
    return this._HttpClient.post('authentication/Login',data)
  }
  decodedToken(){
    const token:any = localStorage.getItem('adminToken')
    const decoded:decoded = jwtDecode(token)
    localStorage.setItem('idd',decoded.Id)
    localStorage.setItem('entryRole',decoded.Role)
    this.getRole()
  }
  getRole():void{
   this.role = localStorage.getItem('entryRole')
   this.userID = localStorage.getItem('idd')
  }
  registerDoctor(data:any):Observable<any>{
    return this._HttpClient.post('Doctor/register',data)
  }

  logOut(){
    localStorage.clear()
  }
}
