import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCurrencyPageRoutingModule } from './all-currency-routing.module';

import { AllCurrencyPage } from './all-currency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCurrencyPageRoutingModule
  ],
  declarations: [AllCurrencyPage]
})
export class AllCurrencyPageModule {}
