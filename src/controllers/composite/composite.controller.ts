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
import { CompositeFactoryService } from '../../services/factories/composite-factory.service';

@Controller('composite')
export class CompositeController {
  private logger = new Logger('AppController');

  constructor(private compositeFactoryService: CompositeFactoryService) {}

  @Post('file')
  //TODO: Mora watermark upload odvojen da ide(ceka se baza)
  @UseInterceptors(FileInterceptor('file1'))
  @UseInterceptors(FileInterceptor('file2'))
  async compositeFile(
    @Body('type') type: string,
    @UploadedFile('file1') file1: Express.Multer.File,
    @UploadedFile('file2') file2: Express.Multer.File,
    @Body('left') left: string,
    @Body('top') top: string,
  ) {
    //just for CLI output
    this.logger.log(
      'Composite ' + file1.originalname + ' with this image: ' + file2.filename,
    );
    //calls the rotate service and returns base64 string
    return this.compositeFactoryService
      .getInstance(parseInt(type))
      .compositeFile(file1.buffer, file2.buffer, parseInt(left), parseInt(top));
  }

  @Post('link')
  async compositeLink(
    @Body('type') type: string,
    @Body('link1') link1: string,
    @Body('link2') link2: string,
    @Body('left') left: number,
    @Body('top') top: number,
  ) {
    //just for CLI output
    this.logger.log('Composite ' + link1 + ' with this image: ' + link2);
    //calls the rotate service and returns base64 string
    return this.compositeFactoryService
      .getInstance(parseInt(type))
      .compositeLink(link1, link2, left, top);
  }
}
