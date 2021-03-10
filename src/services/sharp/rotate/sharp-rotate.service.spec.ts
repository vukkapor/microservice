import { Test, TestingModule } from '@nestjs/testing';
import { SharpRotateService } from './sharp-rotate.service';

describe('SharpRotateService', () => {
  let service: SharpRotateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharpRotateService],
    }).compile();

    service = module.get<SharpRotateService>(SharpRotateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
