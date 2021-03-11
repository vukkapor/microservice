import { Test, TestingModule } from '@nestjs/testing';
import { JimpRotateService } from './jimp-rotate.service';

describe('JimpRotateService', () => {
  let service: JimpRotateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JimpRotateService],
    }).compile();

    service = module.get<JimpRotateService>(JimpRotateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
