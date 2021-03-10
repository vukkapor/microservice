import { Test, TestingModule } from '@nestjs/testing';
import { CompositeService } from './composite.service';

describe('CompositeService', () => {
  let service: CompositeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompositeService],
    }).compile();

    service = module.get<CompositeService>(CompositeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
