import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckBrowserRoutingModule } from './truck-browser-routing.module';
import { TruckBrowserComponent } from './truck-browser.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TruckBrowserComponent],
  imports: [
    CommonModule,
    TruckBrowserRoutingModule,
    FormsModule
  ]
})
export class TruckBrowserModule { }
