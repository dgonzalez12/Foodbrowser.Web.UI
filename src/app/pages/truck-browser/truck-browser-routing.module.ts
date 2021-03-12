import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruckBrowserComponent } from './truck-browser.component';

const routes: Routes = [{ path: '', component: TruckBrowserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckBrowserRoutingModule { }
