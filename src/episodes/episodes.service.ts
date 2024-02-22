import { Episodes } from '../types/episode';

//array with 1 episode for each doctor
const episodes: Episodes = {
  episodes: [
    {
      episodeNumber: 1,
      seasonNumber: 1,
      title: 'An Unearthly Child',
      director: 'Waris Hussein',
      writer: 'Anthony Coburn',
      airDate: '11/23/1963',
      doctorNumber: 1,
      companions: ['Susan Foreman', 'Barbara Wright', 'Ian Chesterton'],
      description: 'The TARDIS takes the Doctor and his companions to the Stone Age, where they encounter a tribe that has lost the secret of fire.',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/74/An_Unearthly_Child.jpg',
      newWho: false,
    },
    {
      episodeNumber: 1,
      seasonNumber: 4,
      title: 'Spearhead from Space',
      director: 'Derek Martinus',
      writer: 'Robert Holmes',
      airDate: '1/3/1970',
      doctorNumber: 3,
      companions: ['Liz Shaw', 'Brigadier Lethbridge-Stewart'],
      description: 'The newly-regenerated Doctor lands on Earth and is exiled to Earth by the Time Lords. He teams up with UNIT to battle the Autons.',
      image: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Spearhead_from_Space.jpg',
      newWho: false,
    },
    {
      episodeNumber: 1,
      seasonNumber: 12,
      title: 'Robot',
      director: 'Christopher Barry',
      writer: 'Terrance Dicks',
      airDate: '12/28/1974',
      doctorNumber: 4,
      companions: ['Sarah Jane Smith', 'Harry Sullivan'],
      description: 'The newly-regenerated Doctor lands on Earth and is exiled to Earth by the Time Lords. He teams up with UNIT to battle the Autons.',
      image: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Spearhead_from_Space.jpg',
      newWho: false,
    },
  ],
};


export class EpisodesService {
  getEpisodes(): Episodes {
    return episodes;
  }

  getEpisodesByDoctor(id: number) {
    return episodes.episodes.filter((episode) => episode.doctorNumber == id);
  }
}