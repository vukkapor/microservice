import { Controller, Logger } from '@nestjs/common';
import { ResizeService } from './resize/resize.service';
import { MessagePattern } from '@nestjs/microservices';
import { RotateService } from './rotate/rotate.service';
import { CompositeService } from './composite/composite.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(
    private resizeService: ResizeService,
    private rotateService: RotateService,
    private compositeService: CompositeService,
  ) {}

  //Define the message pattern for resize method
  @MessagePattern('resize')
  async resize(imageConfig: {
    imageLink: string;
    width: number;
    height: number;
  }) {
    //just for CLI output
    this.logger.log(
      'Resize ' +
        imageConfig.imageLink +
        ' to width: ' +
        imageConfig.width +
        ' and height: ' +
        imageConfig.height,
    );
    //calls the resize service and returns base64 string
    return this.resizeService.resizeToBase64(
      imageConfig.imageLink,
      imageConfig.width,
      imageConfig.height,
    );
  }

  //Define the message pattern for rotate method
  @MessagePattern('rotate')
  async rotate(imageConfig: { imageLink: string; angle: number }) {
    //just for CLI output
    this.logger.log(
      'Rotate ' +
        imageConfig.imageLink +
        ' angle of rotation: ' +
        imageConfig.angle,
    );
    //calls the rotate service and returns base64 string
    return this.rotateService.rotate(imageConfig.imageLink, imageConfig.angle);
  }

  //Define the message pattern for rotate method
  @MessagePattern('composite')
  async composite(imageConfig: { imageLink: string; imageLink2: string }) {
    //just for CLI output
    this.logger.log(
      'Composite ' +
        imageConfig.imageLink +
        ' with this image: ' +
        imageConfig.imageLink2,
    );
    //calls the rotate service and returns base64 string
    return this.compositeService.composite(
      imageConfig.imageLink,
      imageConfig.imageLink2,
    );
  }
}
