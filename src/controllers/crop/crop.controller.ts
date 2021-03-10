import {
  Body,
  Controller,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CropService } from '../../services/crop/crop.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('crop')
export class CropController {
  private logger = new Logger('CropController');

  constructor(private cropService: CropService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async cropFile(
    @UploadedFile('file') file: Express.Multer.File,
    @Body('left') left: string,
    @Body('top') top: string,
    @Body('width') width: string,
    @Body('height') height: string,
  ) {
    //just for CLI output
    this.logger.log(
      'Crop this image: ' +
        file.filename +
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
    return this.cropService.cropFile(
      file.buffer,
      parseInt(left),
      parseInt(top),
      parseInt(width),
      parseInt(height),
    );
  }

  @Post('link')
  async cropLink(
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
    return this.cropService.cropLink(link, left, top, width, height);
  }
}
