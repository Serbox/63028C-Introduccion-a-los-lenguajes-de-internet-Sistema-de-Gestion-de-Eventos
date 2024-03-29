import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)
  const token = sessionStorage.getItem("token")

  if (token) {
    return true
  } else {
    router.navigate(["/login"])
    return false
  }
};
