import {
  Body,
  Controller,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RotateFactoryService } from '../../services/factories/rotate-factory.service';

@Controller('rotate')
export class RotateController {
  private logger = new Logger('AppController');

  constructor(private rotateFactoryService: RotateFactoryService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async rotateFile(
    @UploadedFile('file') file: Express.Multer.File,
    @Body('angle') angle: string,
  ) {
    //just for CLI output
    this.logger.log(
      'Rotate ' + file.originalname + ' angle of rotation: ' + angle,
    );
    //calls the rotate service and returns base64 string
    return this.rotateFactoryService
      .getInstance()
      .rotateFile(file.buffer, parseInt(angle));
  }

  @Post('link')
  async rotateLink(@Body('link') link: string, @Body('angle') angle: number) {
    //just for CLI output
    this.logger.log('Rotate ' + link + ' angle of rotation: ' + angle);
    //calls the rotate service and returns base64 string
    return this.rotateFactoryService.getInstance().rotateLink(link, angle);
  }
}
