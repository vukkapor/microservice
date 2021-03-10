import { Module } from '@nestjs/common';
import { RotateService } from './services/rotate/rotate.service';
import { ResizeService } from './services/resize/resize.service';
import { CompositeService } from './services/composite/composite.service';
import { CropService } from './services/crop/crop.service';
import { ResizeController } from './controllers/resize/resize.controller';
import { RotateController } from './controllers/rotate/rotate.controller';
import { CompositeController } from './controllers/composite/composite.controller';
import { CropController } from './controllers/crop/crop.controller';

@Module({
  imports: [],
  controllers: [
    ResizeController,
    RotateController,
    CompositeController,
    CropController,
  ],
  providers: [ResizeService, RotateService, CompositeService, CropService],
})
export class AppModule {}
