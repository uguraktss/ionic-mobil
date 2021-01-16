import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCurrencyPage } from './my-currency.page';

const routes: Routes = [
  {
    path: '',
    component: MyCurrencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCurrencyPageRoutingModule {}
