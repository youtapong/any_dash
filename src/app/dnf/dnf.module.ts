import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DnfPageRoutingModule } from './dnf-routing.module';

import { DnfPage } from './dnf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DnfPageRoutingModule
  ],
  declarations: [DnfPage]
})
export class DnfPageModule {}
