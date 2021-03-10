import { Module } from '@nestjs/common';
import { SharpRotateService } from './services/sharp/rotate/sharp-rotate.service';
import { SharpResizeService } from './services/sharp/resize/sharp-resize.service';
import { SharpCompositeService } from './services/sharp/composite/sharp-composite.service';
import { SharpCropService } from './services/sharp/crop/sharp-crop.service';
import { ResizeController } from './controllers/resize/resize.controller';
import { RotateController } from './controllers/rotate/rotate.controller';
import { CompositeController } from './controllers/composite/composite.controller';
import { CropController } from './controllers/crop/crop.controller';
import { ResizeFactoryService } from './services/factories/resize-factory.service';
import { RotateFactoryService } from './services/factories/rotate-factory.service';
import { CompositeFactoryService } from './services/factories/composite-factory.service';
import { CropFactoryService } from './services/factories/crop-factory.service';

@Module({
  imports: [],
  controllers: [
    ResizeController,
    RotateController,
    CompositeController,
    CropController,
  ],
  providers: [
    SharpRotateService,
    SharpResizeService,
    SharpCropService,
    SharpCompositeService,
    ResizeFactoryService,
    RotateFactoryService,
    CompositeFactoryService,
    CropFactoryService,
  ],
})
export class AppModule {}
