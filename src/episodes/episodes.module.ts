
import { EpisodesService } from './episodes.service';
import { Module } from '@nestjs/common';


@Module({
  exports: [EpisodesService],
  providers: [EpisodesService],
})
export class EpisodesModule {
}