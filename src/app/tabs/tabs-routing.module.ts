import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-currency',
        loadChildren: () => import('src/app/my-currency/my-currency.module').then(m => m.MyCurrencyPageModule)
      },
      {
        path: 'all-currency',
        loadChildren: () => import('src/app/all-currency/all-currency.module').then(m => m.AllCurrencyPageModule)
      },
      {
        path: "",
        redirectTo: "tabs/my-currency",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "tabs/my-currency",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
