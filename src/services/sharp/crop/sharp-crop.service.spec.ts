import { Test, TestingModule } from '@nestjs/testing';
import { SharpCropService } from './sharp-crop.service';

describe('SharpCropService', () => {
  let service: SharpCropService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharpCropService],
    }).compile();

    service = module.get<SharpCropService>(SharpCropService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
