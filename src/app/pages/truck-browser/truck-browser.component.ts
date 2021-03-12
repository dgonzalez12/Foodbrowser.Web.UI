import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DayOfWeek } from 'src/lib/common/datetime';
import { Truck, TruckBrowserService } from 'src/lib/truck-browser';

@Component({
  selector: 'app-truck-browser',
  templateUrl: './truck-browser.component.html',
  styleUrls: ['./truck-browser.component.scss']
})
export class TruckBrowserComponent implements OnInit {
  @ViewChild('filterForm', { static: false }) filterForm: NgForm
  daysOfWeek = daysOfWeek;
  dayOfWeek: number;
  time: string;
  isLoading = false;
  trucks: Truck[];

  constructor(private truckBrowserService: TruckBrowserService) { }

  findTrucks() {
    try {
      const form = this.filterForm;
      const dayNumber = this.dayOfWeek !== -1 ? this.dayOfWeek : null;
      const timeString = this.time && this.time.length > 0 ? this.time : null;
      this.isLoading = true;
      this.truckBrowserService.findTrucks(dayNumber, timeString).subscribe(r =>
        {
          if (!r.Success) {
            alert(r.Message);
          }
          this.trucks = r.Obj;
        },
        err => alert(err.message)
      );
      this.isLoading = false;
    } catch (error) {
      alert(error.message);
    }
  }

  ngOnInit(): void {
  }

}

const daysOfWeek: DayOfWeek[] = [
  { number: 0, name: 'Sunday' },
  { number: 1, name: 'Monday' },
  { number: 2, name: 'Tuesday' },
  { number: 3, name: 'Wednesday' },
  { number: 4, name: 'Thursday' },
  { number: 5, name: 'Friday' },
  { number: 6, name: 'Saturday' },
]