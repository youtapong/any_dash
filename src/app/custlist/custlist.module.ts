import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustlistPageRoutingModule } from './custlist-routing.module';

import { CustlistPage } from './custlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustlistPageRoutingModule
  ],
  declarations: [CustlistPage]
})
export class CustlistPageModule {}
