import { Test, TestingModule } from '@nestjs/testing';
import { JimpCompositeService } from './jimp-composite.service';

describe('JimpCompositeService', () => {
  let service: JimpCompositeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JimpCompositeService],
    }).compile();

    service = module.get<JimpCompositeService>(JimpCompositeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
