import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCurrencyPageRoutingModule } from './my-currency-routing.module';

import { MyCurrencyPage } from './my-currency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCurrencyPageRoutingModule
  ],
  declarations: [MyCurrencyPage]
})
export class MyCurrencyPageModule {}
