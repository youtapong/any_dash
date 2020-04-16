import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DnfPageRoutingModule } from './dnf-routing.module';

import { DnfPage } from './dnf.page';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DnfPageRoutingModule,
    Ng2GoogleChartsModule,
    NgbModule,
    RouterModule.forChild([
      {
        path: '',
        component: DnfPage
      }
    ])

  ],
  declarations: [DnfPage]
})
export class DnfPageModule {}