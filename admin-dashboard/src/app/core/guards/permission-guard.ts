import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {Role} from "./../enum/role.enum";

export const permissionGuard: CanActivateFn = (route, state) => {
   const router = inject(Router);

 const value = sessionStorage.getItem('user');
 
 if (!value) {
    return router.createUrlTree(['/login']);
  }


const user = value
  ? JSON.parse(value)
  : false;

   return user.role == Role.ADMIN
    ? true
    : inject(Router).createUrlTree(['/access-denied']);
};
