import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seasonEpisode'
})
export class SeasonEpisodePipe implements PipeTransform {

  transform(season: number, episode: number): string {
    if (season === 0) {
      return 'TERMINÉE';
    }
    return `Saison ${season} Episode ${episode}`;
  }

}
