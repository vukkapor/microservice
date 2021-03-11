import {
  Body,
  Controller,
  HostParam,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResizeFactoryService } from '../../services/factories/resize-factory.service';

@Controller('resize')
export class ResizeController {
  private logger = new Logger('AppController');

  constructor(private resizeFactoryService: ResizeFactoryService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async resizeFile(
    @Body('type') type: string,
    @UploadedFile('file') file: Express.Multer.File,
    @Body('width') width: string,
    @Body('height') height: string,
  ) {
    //just for CLI output
    this.logger.log(
      'Resize ' +
        file.originalname +
        ' to width: ' +
        width +
        ' and height: ' +
        height,
    );
    //calls the resize service and returns base64 string
    return this.resizeFactoryService
      .getInstance(parseInt(type))
      .resizeFile(file.buffer, parseInt(width), parseInt(height));
  }

  @Post('link')
  async resizeLink(
    @Body('type') type: string,
    @Body('link') link: string,
    @Body('width') width: number,
    @Body('height') height: number,
  ) {
    //just for CLI output
    this.logger.log(
      'Resize ' + link + ' to width: ' + width + ' and height: ' + height,
    );
    //calls the resize service and returns base64 string
    return this.resizeFactoryService
      .getInstance(parseInt(type))
      .resizeLink(link, width, height);
  }
}
