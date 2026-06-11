import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);

 const value = sessionStorage.getItem('isSessionActive');


const isSessionActive = value
  ? JSON.parse(value)
  : false;

   return isSessionActive
    ? true
    : inject(Router).createUrlTree(['/login']);
};
