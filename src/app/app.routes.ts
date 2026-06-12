import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth-guard';
import { permissionGuard } from './core/guards/permission-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth-routing-module')
        .then(m => m.AuthRoutingModule)
  },
  {
  path: 'access-denied',
  loadComponent: () =>
    import('./core/components/access-denied/access-denied.component')
      .then(c => c.AccessDeniedComponent)
},
  {
    path: '',
    canActivate: [authGuard,permissionGuard],
    component: MainLayoutComponent,

    children: [

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module')
            .then(m => m.DashboardModule)
        
      },

      {
        path: 'transactions',
        loadChildren: () =>
          import('./features/transactions/transactions-module')
            .then(m => m.TransactionsModule)
      },
      
    ]
  }

];