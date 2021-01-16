import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCurrencyPage } from './all-currency.page';

const routes: Routes = [
  {
    path: '',
    component: AllCurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCurrencyPageRoutingModule {}
