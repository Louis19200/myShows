import { Component, inject } from '@angular/core';
import { DataService, DataSerieModel } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  private data = inject(DataService);

  constructor() {}

  getUpcomingSeries(): DataSerieModel[] {
    const series = this.data.getDataSeries();
    return series.filter(s => s.isUpcoming);
  }
}
