import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-shared-nav',
  templateUrl: './shared-nav.component.html',
  styleUrls: ['./shared-nav.component.scss']
})
export class SharedNavComponent {
  constructor(public _AuthService:AuthService){}
  getDoctor():any{
    if(this._AuthService.role == 'Doctor'){
      return true
    }
  }
  getAdmin():any{
    if (this._AuthService.role == 'Admin'){
      return true
    } 
  }
}
