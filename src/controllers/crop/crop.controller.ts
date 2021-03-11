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
import { CropFactoryService } from '../../services/factories/crop-factory.service';

@Controller('crop')
export class CropController {
  private logger = new Logger('CropController');

  constructor(private cropFactoryService: CropFactoryService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async cropFile(
    @Body('type') type: string,
    @UploadedFile('file') file: Express.Multer.File,
    @Body('left') left: string,
    @Body('top') top: string,
    @Body('width') width: string,
    @Body('height') height: string,
  ) {
    //just for CLI output
    this.logger.log(
      'Crop this image: ' +
        file.originalname +
        ' with thees cordinates: zero-indexed offset from left edge: ' +
        left +
        ', z-i of from top edge: ' +
        top +
        ', width of region to extract: ' +
        width +
        ', and height to extr: ' +
        height,
    );
    //calls the rotate service and returns base64 string
    return this.cropFactoryService
      .getInstance(parseInt(type))
      .cropFile(
        file.buffer,
        parseInt(left),
        parseInt(top),
        parseInt(width),
        parseInt(height),
      );
  }

  @Post('link')
  async cropLink(
    @Body('type') type: string,
    @Body('link') link: string,
    @Body('left') left: number,
    @Body('top') top: number,
    @Body('width') width: number,
    @Body('height') height: number,
  ) {
    //just for CLI output
    this.logger.log(
      'Crop this image: ' +
        link +
        ' with thees cordinates: zero-indexed offset from left edge: ' +
        left +
        ', z-i of from top edge: ' +
        top +
        ', width of region to extract: ' +
        width +
        ', and height to extr: ' +
        height,
    );
    //calls the rotate service and returns base64 string
    return this.cropFactoryService
      .getInstance(parseInt(type))
      .cropLink(link, left, top, width, height);
  }
}
