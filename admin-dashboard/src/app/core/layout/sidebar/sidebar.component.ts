import { Component,output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MATERIAL_LAYOUT} from '../../shared/material/layout.imports'


@Component({
  selector: 'app-sidebar',
  imports: [...MATERIAL_LAYOUT],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {


  menuClick = output<void>();

//MENU SECTION ARRAY
menuSections = [
  {
    heading: 'OVERVIEW',
    items: [
      {
        label: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard'
      }
    ]
  },

  {
    heading: 'TRANSACTIONS',
    items: [
      {
        label: 'Transactions',
        icon: 'swap_horiz',
        route: '/transactions'
      },
      // {
      //   label: 'Live Transactions',
      //   icon: 'sync_alt',
      //   route: 'transactions/live'
      // },
      // {
      //   label: 'Failed Transactions',
      //   icon: 'error_outline',
      //   route: '/transactions/failed'
      // }, {
      //   label: 'Pending Transactions',
      //   icon: 'schedule',
      //   route: '/transactions/pending'
      // },

      // {
      //   label: 'High Risk',
      //   icon: 'warning',
      //   route: '/transactions/high-risk'
      // },

      // {
      //   label: 'Bulk Transactions',
      //   icon: 'upload_file',
      //   route: '/transactions/bulk'
      // },

      // {
      //   label: 'Transaction History',
      //   icon: 'history',
      //   route: '/transactions/history'
      // }
    ]
  }

  // {
  //   heading: 'MONITORING',
  //   items: [
  //     {
  //       label: 'Fraud Monitoring',
  //       icon: 'security',
  //       route: '/fraud-monitoring'
  //     },
  //     {
  //       label: 'AML Monitoring',
  //       icon: 'shield',
  //       route: '/aml-monitoring'
  //     }
  //   ]
  // }
];


}
