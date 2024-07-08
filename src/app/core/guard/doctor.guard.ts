import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const doctorGuard: CanActivateFn = (route, state) => {
  let role = inject(AuthService)
  let router = inject(Router)

  if(role.role == 'Doctor'){
    return true
  }
  else{
    router.navigate(['/blank'])
    return false
  }
  
};
