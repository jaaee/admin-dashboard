import { Component, computed, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import {MATERIAL_LAYOUT} from "./../../shared/material/layout.imports";

@Component({
  selector: 'app-breadcrumb',
  imports: [...MATERIAL_LAYOUT],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
   private router = inject(Router);

  //  To get URL
  private url$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    startWith(null),
    map(() => this.router.url)
  );

  url = toSignal(this.url$, { initialValue: this.router.url });

  // CREATE BREADCRUMB FROM URL
  // REMOVE QUERYPARAMS AND FORMAT LABEL
  breadcrumbs = computed(() => {
    const segments = this.url()
     .split('?')[0]
      .split('/')
      .filter(Boolean);

   return segments
    .filter(segment => !/^REF-\d{4}-\d+$/.test(segment))
    .map((segment, index) => ({
      label: this.formatLabel(segment),
      url: '/' + segments.slice(0, index + 1).join('/')
    }));
  });

  //FORMAT BREADCRUMB
  private formatLabel(segment: string): string {
     const labels: Record<string, string> = {
    transactions: 'Transactions',
    details: 'Transaction Details'
  };

  return labels[segment.toLowerCase()]
    ?? segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
  }
}
