import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataService, DataSerieModel } from '../services/data.service';
import { SeasonEpisodePipe } from '../pipes/season-episode-pipe';

@Component({
  selector: 'app-view-serie',
  templateUrl: './view-serie.page.html',
  styleUrls: ['./view-serie.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, SeasonEpisodePipe]
})
export class ViewSeriePage implements OnInit {
  private dataService = inject(DataService);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  
  serie: DataSerieModel | null = null;

  constructor() {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.serie = this.dataService.getDataSerieById(id);
    });
  }

  goBack() {
    this.location.back();
  }

  onEpisodeWatched() {
    if (!this.serie) {
      return;
    }

    const serie = this.serie;

    // Don't increment if already finished
    if (serie.seasonToSee === 0) {
      return;
    }
    
    // Check if we've already watched all episodes
    if (serie.episodeToBeSeen >= serie.nbEpisodes) {
      serie.seasonToSee = 0; // Mark as finished
      serie.episodeToSeeTitle = 'TERMINÉE';
      return;
    }
    
    serie.episodeToBeSeen++;
    serie.episodeToSee++;
    
    // Update the current episode title
    if (serie.episodes && serie.episodes.length > 0) {
      const currentEpisodeNumber = serie.episodeToSee - 1;
      const currentEpisode = serie.episodes.find(e => e.number === currentEpisodeNumber);
      if (currentEpisode) {
        serie.episodeToSeeTitle = currentEpisode.title;
      }
      
      // Update the next episode title
      const nextEpisodeNumber = serie.episodeToSee;
      const nextEpisode = serie.episodes.find(e => e.number === nextEpisodeNumber);
      if (nextEpisode) {
        serie.episodeToBeSeenTitle = nextEpisode.title;
      } else {
        serie.episodeToBeSeenTitle = 'TBA';
      }
    }
    
    // Check if we've watched all episodes in the current season
    if (serie.episodeToSee > serie.nbEpisodes) {
      // Move to next season
      serie.seasonToSee++;
      serie.episodeToSee = 1;
      
      // Check if we've finished all seasons
      if (serie.seasonToSee > serie.nbSeasons) {
        serie.seasonToSee = 0; // Mark as finished
        serie.episodeToSeeTitle = 'TERMINÉE';
      } else {
        serie.episodeToSeeTitle = 'TBA';
        serie.episodeToBeSeenTitle = 'TBA';
      }
    }
    
    serie.lastDate = new Date();
  }
}
