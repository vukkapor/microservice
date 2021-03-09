import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ResizeService } from './resize.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ResizeService],
})
export class AppModule {}
