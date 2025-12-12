import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSeriePage } from './view-serie.page';

const routes: Routes = [
  {
    path: ':id',
    component: ViewSeriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSeriePageRoutingModule {}
