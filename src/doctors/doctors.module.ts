import { DynamicModule, Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { Doctors } from '../types/doctor';

@Module({})

export class DoctorsModule {


  static register(options: Doctors): DynamicModule {
    return {
      module: DoctorsModule,
      providers: [
        {
          provide: DoctorsService,
          useValue: new DoctorsService(options),
        },
      ],
      exports: [DoctorsService],
    };
  }
}
