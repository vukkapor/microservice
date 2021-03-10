import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RotateService } from './rotate/rotate.service';
import { ResizeService } from './resize/resize.service';
import { CompositeService } from './composite/composite.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ResizeService, RotateService, CompositeService],
})
export class AppModule {}
