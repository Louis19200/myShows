import { Injectable } from '@angular/core';
import { DataSerieModel} from "../models/data-serie.model";

export { DataSerieModel };

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataSeries: DataSerieModel[] = [
    {
      id: 0,
      name: "Dune: Prophecy",
      imageUrl: "assets/pictures/dune_prophecy.webp",
      description: "Dans un futur où l'humanité a voyagé à travers la galaxie des milles planètes, une mystérieuse sororité appelée Bene Gesserit navigue entre les batailles politiques et les imbroglios de l'Imperium, poursuivant un but bien précis et bien à lui qui va amener ses membres jusqu'à l'énigmatique planète de Dune…",
      nbSeasons: 1,
      nbEpisodes: 4,
      seasonToSee: 1,
      episodeToSee: 1,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "Twice Born",
      episodeToBeSeenTitle: "The Hidden Hand",
      note: 4.7,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "Twice Born" },
        { number: 2, title: "The Hidden Hand" },
        { number: 3, title: "The Power of the Light" },
        { number: 4, title: "An Imperial Gift" }
      ],
      isUpcoming: false
    },
    {
      id: 1,
      name: "Slow Horses",
      imageUrl: "assets/pictures/slow_horses.jpg",
      description: "Cette fiction d'espionnage ingénieuse suit une équipe dysfonctionnelle d'agents du MI5 - et leur odieux patron, le célèbre Jackson Lamb - qui naviguent dans le monde trouble de l'espionnage pour défendre l'Angleterre contre des forces malfaisantes.",
      nbSeasons: 4,
      nbEpisodes: 24,
      seasonToSee: 2,
      episodeToSee: 1,
      episodeToBeSeen: 17,
      episodeToSeeTitle: "Last Stop",
      episodeToBeSeenTitle: "From Upshott With Love",
      note: 4.9,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "Slow Horses" },
        { number: 2, title: "Dead Lions" },
        { number: 3, title: "Real Field" },
        { number: 4, title: "Thy Ravens" },
        { number: 5, title: "Isolation" },
        { number: 6, title: "Last Stop" },
        { number: 7, title: "From Upshott With Love" },
        { number: 8, title: "Slough House" }
      ],
      isUpcoming: false
    },
    {
      id: 2,
      name: "Tokyo Vice",
      imageUrl: "assets/pictures/tokyo_vice.webp",
      description: "À Tokyo, un reporter américain employé par un journal japonais se met en danger en étant à la fois un interlocuteur des yakuzas et un informateur de la police.",
      nbSeasons: 2,
      nbEpisodes: 18,
      seasonToSee: 1,
      episodeToSee: 1,
      episodeToBeSeen: 17,
      episodeToSeeTitle: "The Test",
      episodeToBeSeenTitle: "Kishi Kaisei",
      note: 4.9,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "The Test" },
        { number: 2, title: "Kishi Kaisei" },
        { number: 3, title: "The Writing in the Sky" },
        { number: 4, title: "Shinjuku" },
        { number: 5, title: "Tokyo, I'm Home" },
        { number: 6, title: "The Snare" },
        { number: 7, title: "The Night Watch" },
        { number: 8, title: "Kaminari Yama" }
      ],
      isUpcoming: false
    },
    {
      id: 3,
      name: "Silo",
      imageUrl: "assets/pictures/silo.jpeg",
      description: "Dans un monde futur dévasté et toxique, des milliers de survivants habitent un gigantesque silo souterrain. Après la transgression d'une règle d'or par leur shérif et la mort mystérieuse de plusieurs résidents, Juliette, une mécanicienne, perce peu à peu les terribles secrets du Silo.",
      nbSeasons: 2,
      nbEpisodes: 15,
      seasonToSee: 2,
      episodeToSee: 15,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "descent",
      episodeToBeSeenTitle: "",
      note: 4.9,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "The Dive" },
        { number: 2, title: "The Engineer" },
        { number: 3, title: "Solo" },
        { number: 4, title: "The Engineer" },
        { number: 5, title: "Descent" },
        { number: 6, title: "The Engineer" },
        { number: 7, title: "The Engineer" },
        { number: 8, title: "Descent" }
      ],
      isUpcoming: false
    },
    {
      id: 4,
      name: "Reacher",
      imageUrl: "assets/pictures/reacher.jpg",
      description: "Quand Jack Reacher, ancien officier de la police militaire, est accusé à tort de meurtre, il se retrouve au milieu d'une conspiration où nagent flics corrompus, hommes d'affaires louches et politiciens sournois. Grâce à son intelligence, il doit découvrir ce que cache la ville de Margrave, en Géorgie. La première saison de Reacher est basée sur le best-seller de Lee Child, \"Du fond de l'abîme\".",
      nbSeasons: 2,
      nbEpisodes: 16,
      seasonToSee: 3,
      episodeToSee: 1,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "TBA",
      episodeToBeSeenTitle: "",
      note: 4.8,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "The Killing Floor" },
        { number: 2, title: "First Contact" },
        { number: 3, title: "Answers" },
        { number: 4, title: "October Sky" },
        { number: 5, title: "The Hospitality Suite" },
        { number: 6, title: "The Fix" },
        { number: 7, title: "Second Sight" },
        { number: 8, title: "Clearing Out" }
      ],
      isUpcoming: false
    },
    {
      id: 5,
      name: "Andor",
      imageUrl: "assets/pictures/andor.jpg",
      description: "En cette ère dangereuse, Cassian Andor emprunte un chemin qui fera de lui un héros de la rébellion.",
      nbSeasons: 1,
      nbEpisodes: 12,
      seasonToSee: 2,
      episodeToSee: 1,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "TBA",
      episodeToBeSeenTitle: "",
      note: 4.8,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "Narkina 5" },
        { number: 2, title: "Three Lessons" },
        { number: 3, title: "Reckoning" },
        { number: 4, title: "The Axe Forgets" },
        { number: 5, title: "The Narkina 5 Prisoner Exchange Program" },
        { number: 6, title: "The Eye" },
        { number: 7, title: "Cassian" },
        { number: 8, title: "Hopes and Fears" }
      ],
      isUpcoming: false
    },
    {
      id: 6,
      name: "The Gentlemen",
      imageUrl: "assets/pictures/gentlement.jpg",
      description: "Quand Eddie, un aristocrate, hérite du domaine familial, il y découvre un énorme empire de la beuh... Et les exploitants n'ont aucune intention de l'abandonner !",
      nbSeasons: 1,
      nbEpisodes: 8,
      seasonToSee: 2,
      episodeToSee: 1,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "TBA",
      episodeToBeSeenTitle: "",
      note: 4.9,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "Welcome to the Farm" },
        { number: 2, title: "It's Not What You Know" },
        { number: 3, title: "The Lamb and the Lion" },
        { number: 4, title: "The Duchess" },
        { number: 5, title: "Where There's Smoke" },
        { number: 6, title: "The Devil's Due" },
        { number: 7, title: "House Cleaning" },
        { number: 8, title: "Beastie Boys" }
      ],
      isUpcoming: false
    },
    {
      id: 7,
      name: "Shogun",
      imageUrl: "assets/pictures/shogun.jpg",
      description: "En l'an 1600 au Japon, le seigneur Yoshii Toranaga lutte pour sa survie alors que ses ennemis du Conseil des régents se liguent contre lui, lorsqu'un mystérieux navire européen est retrouvé échoué dans un village de pêcheurs voisin.",
      nbSeasons: 1,
      nbEpisodes: 10,
      seasonToSee: 0,
      episodeToSee: 0,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "",
      episodeToBeSeenTitle: "",
      note: 4.9,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "Crimson Sky" },
        { number: 2, title: "Unfamiliar Ground" },
        { number: 3, title: "The Woman Who Would Not Wait" },
        { number: 4, title: "Proof" },
        { number: 5, title: "Barbarian" },
        { number: 6, title: "The Last Moment of the World" },
        { number: 7, title: "The Bridge" },
        { number: 8, title: "The Siege" },
        { number: 9, title: "Sacrifice" },
        { number: 10, title: "Shogun" }
      ],
      isUpcoming: false
    },
    {
      id: 8,
      name: "Expats",
      imageUrl: "assets/pictures/slow_horses.jpg",
      description: "Une série qui suit les vies complexes de quatre femmes occidentales expatriées à Hong Kong.",
      nbSeasons: 1,
      nbEpisodes: 6,
      seasonToSee: 1,
      episodeToSee: 1,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "Arrivée",
      episodeToBeSeenTitle: "",
      note: 4.5,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "Arrival" },
        { number: 2, title: "Disconnected" },
        { number: 3, title: "Secrets" },
        { number: 4, title: "Lies" },
        { number: 5, title: "Unraveled" },
        { number: 6, title: "Change" }
      ],
      isUpcoming: true
    },
    {
      id: 9,
      name: "Rivals",
      imageUrl: "assets/pictures/reacher.jpg",
      description: "Une série de compétition entre deux rivaux dans le monde des médias britanniques.",
      nbSeasons: 1,
      nbEpisodes: 8,
      seasonToSee: 1,
      episodeToSee: 1,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "Pilot",
      episodeToBeSeenTitle: "",
      note: 4.6,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "Pilot" },
        { number: 2, title: "Episode 2" },
        { number: 3, title: "Episode 3" },
        { number: 4, title: "Episode 4" },
        { number: 5, title: "Episode 5" },
        { number: 6, title: "Episode 6" },
        { number: 7, title: "Episode 7" },
        { number: 8, title: "Episode 8" }
      ],
      isUpcoming: true
    },
    {
      id: 10,
      name: "Harlan Coben's Never Lie",
      imageUrl: "assets/pictures/andor.jpg",
      description: "Un thriller psychologique basé sur le roman de Harlan Coben.",
      nbSeasons: 1,
      nbEpisodes: 6,
      seasonToSee: 1,
      episodeToSee: 1,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "Pilot",
      episodeToBeSeenTitle: "",
      note: 4.7,
      lastDate: new Date(),
      episodes: [
        { number: 1, title: "Never Lie" },
        { number: 2, title: "Episode 2" },
        { number: 3, title: "Episode 3" },
        { number: 4, title: "Episode 4" },
        { number: 5, title: "Episode 5" },
        { number: 6, title: "Episode 6" }
      ],
      isUpcoming: true
    }
  ];

  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Gallery',
      date: 'Yesterday',
      id: 6,
      read: false
    },
    {
      fromName: 'Megan Jelani',
      subject: 'Re: New Fruits on the menu',
      date: 'Yesterday',
      id: 7,
      read: false
    },
    {
      fromName: 'Nicholas Romero',
      subject: 'Gaming Tournament',
      date: '2 days ago',
      id: 8,
      read: false
    },
    {
      fromName: 'Pierce Harrington',
      subject: 'Comicon photos',
      date: '2 days ago',
      id: 9,
      read: false
    },
    {
      fromName: 'Jessica Smith',
      subject: 'Re: Product bundle',
      date: '2 days ago',
      id: 10,
      read: false
    },
    {
      fromName: 'Franklin Warren',
      subject: 'Meetup on Tuesday',
      date: '3 days ago',
      id: 11,
      read: false
    },
    {
      fromName: 'Neville Longbotton',
      subject: 'Your check cleared',
      date: '3 days ago',
      id: 12,
      read: false
    },
    {
      fromName: 'Maximilian Dorwart',
      subject: 'New release: Flutter 2.0',
      date: '4 days ago',
      id: 13,
      read: false
    },
    {
      fromName: 'Jordyn Castaneda',
      subject: 'Re: Job application',
      date: '4 days ago',
      id: 14,
      read: false
    }
  ];

  constructor() { }

  public getDataSeries(): DataSerieModel[] {
    return this.dataSeries;
  }

  public getDataSerieById(id: number): DataSerieModel {
    return this.dataSeries[id];
  }

  public getMessages(): Message[] {
    return this.messages;
  }

}
