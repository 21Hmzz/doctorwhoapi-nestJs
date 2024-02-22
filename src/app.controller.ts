import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { DoctorsService } from './doctors/doctors.service';
import { EpisodesService } from './episodes/episodes.service';

const endpoints = {
  doctors: '/doctors',
  episodes: '/episodes',
  episodesByDoctor: '/episodes/doctor/:id',
};

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private doctorService: DoctorsService,
    private episodeService: EpisodesService,
  ) {
  }

  @Get()
  getLog(): Object {
    const fs = require('fs');
    const log = fs.readFileSync('log.json', 'utf8');
    if (log) {
      const logJson = JSON.parse(log);
      logJson.endpoints = endpoints;
      return logJson;
    }

    return { endpoints };

  }

  @Get('doctors')
  getDoctors(): Object {
    return this.doctorService.getDoctors();
  }

  @Get('doctors/:id')
  getDoctor(@Param('id') id: number): Object {
    return this.doctorService.getDoctor(id);
  }

  @Get('episodes')
  getEpisodes(): Object {
    return this.episodeService.getEpisodes();
  }

  @Get('episodes/doctor/:id')
  getEpisodesByDoctor(@Param('id') id: number): Object {
    return this.episodeService.getEpisodesByDoctor(id);
  }
}
