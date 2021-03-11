import { Test, TestingModule } from '@nestjs/testing';
import { JimpResizeService } from './jimp-resize.service';

describe('JimpResizeService', () => {
  let service: JimpResizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JimpResizeService],
    }).compile();

    service = module.get<JimpResizeService>(JimpResizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
