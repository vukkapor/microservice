import {
  Body,
  Controller,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CompositeService } from '../../services/composite/composite.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('composite')
export class CompositeController {
  private logger = new Logger('AppController');

  constructor(private compositeService: CompositeService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file1'))
  @UseInterceptors(FileInterceptor('file2'))
  async compositeFile(
    @UploadedFile('file1') file1: Express.Multer.File,
    @UploadedFile('file2') file2: Express.Multer.File,
  ) {
    //just for CLI output
    this.logger.log(
      'Composite ' + file1.filename + ' with this image: ' + file2.filename,
    );
    //calls the rotate service and returns base64 string
    return this.compositeService.compositeFile(file1.buffer, file2.buffer);
  }

  @Post('link')
  async compositeLink(
    @Body('link1') link1: string,
    @Body('link2') link2: string,
  ) {
    //just for CLI output
    this.logger.log('Composite ' + link1 + ' with this image: ' + link2);
    //calls the rotate service and returns base64 string
    return this.compositeService.compositeLink(link1, link2);
  }
}