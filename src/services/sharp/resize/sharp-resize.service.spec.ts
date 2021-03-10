import { Test, TestingModule } from '@nestjs/testing';
import { SharpResizeService } from './sharp-resize.service';

describe('SharpResizeService', () => {
  let service: SharpResizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharpResizeService],
    }).compile();

    service = module.get<SharpResizeService>(SharpResizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
