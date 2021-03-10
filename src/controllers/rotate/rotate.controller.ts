import {
  Body,
  Controller,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RotateService } from '../../services/rotate/rotate.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('rotate')
export class RotateController {
  private logger = new Logger('AppController');

  constructor(private rotateService: RotateService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async rotateFile(
    @UploadedFile('file') file: Express.Multer.File,
    @Body('angle') angle: string,
  ) {
    //just for CLI output
    this.logger.log('Rotate ' + file.filename + ' angle of rotation: ' + angle);
    //calls the rotate service and returns base64 string
    return this.rotateService.rotateFile(file.buffer, parseInt(angle));
  }

  @Post('link')
  async rotateLink(@Body('link') link: string, @Body('angle') angle: number) {
    //just for CLI output
    this.logger.log('Rotate ' + link + ' angle of rotation: ' + angle);
    //calls the rotate service and returns base64 string
    return this.rotateService.rotateLink(link, angle);
  }
}
