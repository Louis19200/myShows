export interface Episode {
  number: number;
  title: string;
}

export interface DataSerieModel {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  nbSeasons: number;
  nbEpisodes: number;
  seasonToSee: number;
  episodeToSee: number;
  episodeToBeSeen: number;
  episodeToSeeTitle: string;
  episodeToBeSeenTitle: string;
  note: number;
  lastDate: Date;
  episodes?: Episode[];
  isUpcoming?: boolean;
}