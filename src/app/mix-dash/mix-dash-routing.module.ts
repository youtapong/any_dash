import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixDashPage } from './mix-dash.page';

const routes: Routes = [
  {
    path: '',
    component: MixDashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixDashPageRoutingModule {}
