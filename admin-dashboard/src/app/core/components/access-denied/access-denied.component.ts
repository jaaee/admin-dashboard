import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL_COMMON } from '../../shared/material/common.imports';

@Component({
  selector: 'app-access-denied',
  imports: [...MATERIAL_COMMON,RouterLink],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.scss',
})
export class AccessDeniedComponent {}
