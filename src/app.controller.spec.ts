import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
      it('should return all doctors', () => {
        expect(appController.getDoctors()).toEqual({ doctors: [{ doctorNumber: 1, name: 'John Doe' }] });
      });
      it('should return a doctor', () => {
        expect(appController.getDoctor(1)).toEqual({ doctorNumber: 1, name: 'John Doe' });
      });
      it('should return all episodes', () => {
        expect(appController.getEpisodes()).toEqual({
          episodes: [{
            episodeNumber: 1,
            doctorNumber: 1,
            name: 'The Doctor',
          }],
        });
      });
      it('should return episodes by doctor', () => {
        expect(appController.getEpisodesByDoctor(1)).toEqual({
          episodes: [{
            episodeNumber: 1,
            doctorNumber: 1,
            name: 'The Doctor',
          }],
        });
      });
    },
  );
});
