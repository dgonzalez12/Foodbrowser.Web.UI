import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckBrowserRoutingModule } from './truck-browser-routing.module';
import { TruckBrowserComponent } from './truck-browser.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TruckBrowserComponent],
  imports: [
    CommonModule,
    TruckBrowserRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: []
})
export class TruckBrowserModule { }
