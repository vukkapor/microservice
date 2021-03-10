import { Test, TestingModule } from '@nestjs/testing';
import { CompositeController } from './composite.controller';

describe('CompositeController', () => {
  let controller: CompositeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompositeController],
    }).compile();

    controller = module.get<CompositeController>(CompositeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
