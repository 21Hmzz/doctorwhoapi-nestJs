import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';
import { DoctorsModule } from './doctors/doctors.module';
import { Doctors } from './types/doctor';
import { EpisodesService } from './episodes/episodes.service';


const doctors: Doctors = {
  doctors: [
    {
      'name': 'William Hartnell',
      'years': 1963,
      'seasons': 3,
      'doctorNumber': 1,
      'companions': [
        'Susan Foreman',
        'Ian Chesterton',
        'Barbara Wright',
        'Vicki',
        'Steven Taylor',
        'Katarina',
        'Sara Kingdom',
        'Dodo Chaplet',
        'Polly',
        'Ben Jackson',
      ],
      'image': 'william_hartnell.jpg',
      'description': 'The First Doctor was portrayed by William Hartnell from 1963 to 1966. He was the original Doctor, and his companions were Susan Foreman, Ian Chesterton, Barbara Wright, and Vicki. He was the first Doctor to regenerate, and he did so after being worn out by the Cybermen.',
      'firstEpisode': 'An Unearthly Child',
      'lastEpisode': 'The Tenth Planet',
      'previousDoctor': null,
      'nextDoctor': 'Patrick Troughton',
    },
    {
      'name': 'Patrick Troughton',
      'years': 1966,
      'seasons': 3,
      'doctorNumber': 2,
      'companions': [
        'Polly',
        'Ben Jackson',
        'Jamie McCrimmon',
        'Victoria Waterfield',
        'Zoe Heriot',
      ],
      'image': 'patrick_troughton.jpg',
      'description': 'The Second Doctor was portrayed by Patrick Troughton from 1966 to 1969. He was the first Doctor to regenerate, and his companions were Polly, Ben Jackson, Jamie McCrimmon, Victoria Waterfield, and Zoe Heriot. He was the first Doctor to have a "base of operations" on Earth, and he was also the first Doctor to have a companion from the future.',
      'firstEpisode': 'The Tenth Planet',
      'lastEpisode': 'The War Games',
      'previousDoctor': 'William Hartnell',
      'nextDoctor': 'Jon Pertwee',
    },
    {
      'name': 'Jon Pertwee',
      'years': 1970,
      'seasons': 5,
      'doctorNumber': 3,
      'companions': [
        'Liz Shaw',
        'Jo Grant',
        'Sarah Jane Smith',
        'Harry Sullivan',
        'The Brigadier',
        'Yates',
        'Benton',
      ],
      'image': 'jon_pertwee.jpg',
      'description': 'The Third Doctor was portrayed by Jon Pertwee from 1970 to 1974. He was the first Doctor to be exiled to Earth, and his companions were Liz Shaw, Jo Grant, Sarah Jane Smith, Harry Sullivan, The Brigadier, Yates, and Benton. He was the first Doctor to have a recurring enemy, and he was also the first Doctor to have a companion from the future.',
      'firstEpisode': 'Spearhead from Space',
      'lastEpisode': 'Planet of the Spiders',
      'previousDoctor': 'Patrick Troughton',
      'nextDoctor': 'Tom Baker',
    },
    {
      'name': 'Tom Baker',
      'years': 1974,
      'seasons': 7,
      'doctorNumber': 4,
      'companions': [
        'Sarah Jane Smith',
        'Harry Sullivan',
        'Leela',
        'K-9',
        'Romana',
        'Adric',
        'Nyssa',
        'Tegan Jovanka',
      ],
      'image': 'tom_baker.jpg',
      'description': 'The Fourth Doctor was portrayed by Tom Baker from 1974 to 1981. He was the longest-running Doctor, and his companions were Sarah Jane Smith, Harry Sullivan, Leela, K-9, Romana, Adric, Nyssa, and Tegan Jovanka. He was the first Doctor to have a robot companion, and he was also the first Doctor to have a companion from the future.',
      'firstEpisode': 'Robot',
      'lastEpisode': 'Logopolis',
      'previousDoctor': 'Jon Pertwee',
      'nextDoctor': 'Peter Davison',
    },
    {
      'name': 'Peter Davison',
      'years': 1982,
      'seasons': 3,
      'doctorNumber': 5,
      'companions': [
        'Adric',
        'Nyssa',
        'Tegan Jovanka',
        'Vislor Turlough',
        'Kamelion',
        'Peri Brown',
      ],
      'image': 'peter_davison.jpg',
      'description': 'The Fifth Doctor was portrayed by Peter Davison from 1982 to 1984. He was the youngest Doctor, and his companions were Adric, Nyssa, Tegan Jovanka, Vislor Turlough, Kamelion, and Peri Brown. He was the first Doctor to have a companion from the future, and he was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'Castrovalva',
      'lastEpisode': 'The Caves of Androzani',
      'previousDoctor': 'Tom Baker',
      'nextDoctor': 'Colin Baker',
    },
    {
      'name': 'Colin Baker',
      'years': 1984,
      'seasons': 2,
      'doctorNumber': 6,
      'companions': [
        'Peri Brown',
        'Mel Bush',
      ],
      'image': 'colin_baker.jpg',
      'description': 'The Sixth Doctor was portrayed by Colin Baker from 1984 to 1986. He was the first Doctor to have a multi-colored coat, and his companions were Peri Brown and Mel Bush. He was the first Doctor to have a companion from the future, and he was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'The Twin Dilemma',
      'lastEpisode': 'The Ultimate Foe',
      'previousDoctor': 'Peter Davison',
      'nextDoctor': 'Sylvester McCoy',
    },
    {
      'name': 'Sylvester McCoy',
      'years': 1987,
      'seasons': 3,
      'doctorNumber': 7,
      'companions': [
        'Mel Bush',
        'Ace',
      ],
      'image': 'sylvester_mccoy.jpg',
      'description': 'The Seventh Doctor was portrayed by Sylvester McCoy from 1987 to 1996 (including the 1996 TV movie). He was the last Doctor of the original series, and his companions were Mel Bush and Ace. He was the first Doctor to have a companion from the future, and he was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'Time and the Rani',
      'lastEpisode': 'Survival',
      'previousDoctor': 'Colin Baker',
      'nextDoctor': 'Paul McGann',
    },
    {
      'name': 'Paul McGann',
      'years': 1996,
      'seasons': 1,
      'doctorNumber': 8,
      'companions': [
        'Grace Holloway',
        'Chang Lee',
      ],
      'image': 'paul_mcgann.jpg',
      'description': 'The Eighth Doctor was portrayed by Paul McGann in the 1996 TV movie. He was the first Doctor of the new series, and his companions were Grace Holloway and Chang Lee. He was the first Doctor to have a companion from the future, and he was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'Doctor Who',
      'lastEpisode': 'Doctor Who',
      'previousDoctor': 'Sylvester McCoy',
      'nextDoctor': 'Christopher Eccleston',
    },
    {
      'name': 'Christopher Eccleston',
      'years': 2005,
      'seasons': 1,
      'doctorNumber': 9,
      'companions': [
        'Rose Tyler',
        'Adam Mitchell',
        'Captain Jack Harkness',
      ],
      'image': 'christopher_eccleston.jpg',
      'description': 'The Ninth Doctor was portrayed by Christopher Eccleston in 2005. He was the first Doctor of the new series, and his companions were Rose Tyler, Adam Mitchell, and Captain Jack Harkness. He was the first Doctor to have a companion from the future, and he was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'Rose',
      'lastEpisode': 'The Parting of the Ways',
      'previousDoctor': 'Paul McGann',
      'nextDoctor': 'David Tennant',
    },
    {
      'name': 'David Tennant',
      'years': 2005,
      'seasons': 3,
      'doctorNumber': 10,
      'companions': [
        'Rose Tyler',
        'Mickey Smith',
        'Martha Jones',
        'Donna Noble',
        'Captain Jack Harkness',
        'Sarah Jane Smith',
        'Astrid Peth',
        'Jackson Lake',
        'Rosita Farisi',
        'Christina de Souza',
        'Adelaide Brooke',
        'Wilfred Mott',
      ],
      'image': 'david_tennant.jpg',
      'description': 'The Tenth Doctor was portrayed by David Tennant from 2005 to 2010. He was the first Doctor to have a recurring enemy, and his companions were Rose Tyler, Mickey Smith, Martha Jones, Donna Noble, Captain Jack Harkness, Sarah Jane Smith, Astrid Peth, Jackson Lake, Rosita Farisi, Christina de Souza, Adelaide Brooke, and Wilfred Mott. He was the first Doctor to have a companion from the future, and he was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'The Parting of the Ways',
      'lastEpisode': 'The End of Time',
      'previousDoctor': 'Christopher Eccleston',
      'nextDoctor': 'Matt Smith',
    },
    {
      'name': 'Matt Smith',
      'years': 2010,
      'seasons': 4,
      'doctorNumber': 11,
      'companions': [
        'Amy Pond',
        'Rory Williams',
        'River Song',
        'Craig Owens',
        'Sophie',
        'Canton Everett Delaware III',
        'Brian Williams',
        'Clara Oswald',
      ],
      'image': 'matt_smith.jpg',
      'description': 'The Eleventh Doctor was portrayed by Matt Smith from 2010 to 2013. He was the first Doctor to have a recurring enemy, and his companions were Amy Pond, Rory Williams, River Song, Craig Owens, Sophie, Canton Everett Delaware III, Brian Williams, and Clara Oswald. He was the first Doctor to have a companion from the future, and he was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'The End of Time',
      'lastEpisode': 'The Time of the Doctor',
      'previousDoctor': 'David Tennant',
      'nextDoctor': 'Peter Capaldi',
    },
    {
      'name': 'Peter Capaldi',
      'years': 2013,
      'seasons': 3,
      'doctorNumber': 12,
      'companions': [
        'Clara Oswald',
        'Nardole',
        'Bill Potts',
      ],
      'image': 'peter_capaldi.jpg',
      'description': 'The Twelfth Doctor was portrayed by Peter Capaldi from 2013 to 2017. He was the first Doctor to have a recurring enemy, and his companions were Clara Oswald, Nardole, and Bill Potts. He was the first Doctor to have a companion from the future, and he was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'The Time of the Doctor',
      'lastEpisode': 'Twice Upon a Time',
      'previousDoctor': 'Matt Smith',
      'nextDoctor': 'Jodie Whittaker',
    },
    {
      'name': 'Jodie Whittaker',
      'years': 2017,
      'seasons': 2,
      'doctorNumber': 13,
      'companions': [
        'Graham O\'Brien',
        'Ryan Sinclair',
        'Yasmin Khan',
      ],
      'image': 'jodie_whittaker.jpg',
      'description': 'The Thirteenth Doctor was portrayed by Jodie Whittaker from 2017 to present. She was the first Doctor to have a recurring enemy, and her companions were Graham O\'Brien, Ryan Sinclair, and Yasmin Khan. She was the first Doctor to have a companion from the future, and she was also the first Doctor to have a companion from the past.',
      'firstEpisode': 'Twice Upon a Time',
      'lastEpisode': 'The Timeless Children',
      'previousDoctor': 'Peter Capaldi',
      'nextDoctor': null,
    },
  ],
};


@Module({
  imports: [DoctorsModule.register(doctors)],
  controllers: [AppController],
  providers: [AppService,EpisodesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
