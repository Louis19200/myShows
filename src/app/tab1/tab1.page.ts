import { Component, inject } from '@angular/core';
import { DataService, DataSerieModel } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  private data = inject(DataService);
  selectedSegment = 'toWatch';

  constructor() {}

  getFilteredSeries(): DataSerieModel[] {
    const series = this.data.getDataSeries();
    if (this.selectedSegment === 'toWatch') {
      return series.filter(s => s.seasonToSee > 0 && !s.isUpcoming);
    } else if (this.selectedSegment === 'upcoming') {
      return series.filter(s => s.isUpcoming);
    }
    return series;
  }

  onSegmentChange(event: any) {
    this.selectedSegment = event.detail.value;
  }
}
