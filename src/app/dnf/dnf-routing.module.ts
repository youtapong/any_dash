import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DnfPage } from './dnf.page';

const routes: Routes = [
  {
    path: '',
    component: DnfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DnfPageRoutingModule {}
