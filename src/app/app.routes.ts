import { Routes } from '@angular/router';
import { TodoWithTemplateReferenceComponent } from './todo-with-template-reference/todo-with-template-reference.component';
import { TodoWithTwoWayDatabindingComponent } from './todo-with-two-way-databinding/todo-with-two-way-databinding.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SearchFilterInApiComponent } from './search-filter-in-api/search-filter-in-api.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoWithTemplateReferenceComponent,
  },
  {
    path: 'todo',
    component: TodoWithTwoWayDatabindingComponent,
  },
  {
    path: 'search-filter',
    component: SearchFilterComponent,
  },
  {
    path: 'search-filter-api',
    component: SearchFilterInApiComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
