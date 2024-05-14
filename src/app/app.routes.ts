import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'child1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'child1', component: Child1Component, data: { text: 'Child1' } },
  { path: 'child2', component: Child2Component, data: { text: 'Child2' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
