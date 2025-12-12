import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, DataSerieModel } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getDataSeries(): DataSerieModel[] {
    return this.data.getDataSeries();
  }

  onEpisodeWatched(serie: DataSerieModel) {
    serie.episodeToBeSeen++;
    serie.lastDate = new Date();
  }
}
