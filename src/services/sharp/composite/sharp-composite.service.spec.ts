import { Test, TestingModule } from '@nestjs/testing';
import { SharpCompositeService } from './sharp-composite.service';

describe('SharpCompositeService', () => {
  let service: SharpCompositeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharpCompositeService],
    }).compile();

    service = module.get<SharpCompositeService>(SharpCompositeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
