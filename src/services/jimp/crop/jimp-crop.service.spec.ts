import { Test, TestingModule } from '@nestjs/testing';
import { JimpCropService } from './jimp-crop.service';

describe('JimpCropService', () => {
  let service: JimpCropService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JimpCropService],
    }).compile();

    service = module.get<JimpCropService>(JimpCropService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
