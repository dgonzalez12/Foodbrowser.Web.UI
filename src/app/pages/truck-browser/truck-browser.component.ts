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
  dayOfWeek: number = -1;
  time: string;
  isLoading = false;
  trucks: Truck[];
  page = 1;
  pageSize = 10;
  totalCount = 0;

  columnDefs=[{field: 'Applicant'}, {field: 'Location'}];

  constructor(private truckBrowserService: TruckBrowserService) { }

  async findTrucks() {
    this.isLoading = true;
    const dayNumber = this.dayOfWeek.toString() !== '-1' ? this.dayOfWeek : null;
    const timeString = this.time && this.time.length > 0 ? this.time : null;
    this.truckBrowserService.findTrucks(dayNumber, timeString).subscribe(o =>
      {
        if (!o.success) {
          alert(o.message);
        } else {
          this.trucks = o.obj;
          this.totalCount = this.trucks.length;
        }
        this.isLoading = false;
      },
      err =>
      {
        alert(err.message);
        this.isLoading = false;
      });
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