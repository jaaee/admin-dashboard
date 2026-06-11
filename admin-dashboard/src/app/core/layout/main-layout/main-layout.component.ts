import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {MATERIAL_LAYOUT} from '../../shared/material/layout.imports'

@Component({
  selector: 'app-main-layout',
  imports: [...MATERIAL_LAYOUT,BreadcrumbComponent, FooterComponent, NavbarComponent, SidebarComponent ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
