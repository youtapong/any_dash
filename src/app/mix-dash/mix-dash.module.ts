import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixDashPageRoutingModule } from './mix-dash-routing.module';

import { MixDashPage } from './mix-dash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixDashPageRoutingModule
  ],
  declarations: [MixDashPage]
})
export class MixDashPageModule {}
