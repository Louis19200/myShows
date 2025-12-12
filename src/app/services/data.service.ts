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
      episodeToSee: 4,
      episodeToBeSeen: 0,
      episodeToSeeTitle: "Twice Born",
      episodeToBeSeenTitle: "",
      note: 4.7,
      lastDate: new Date(),
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
