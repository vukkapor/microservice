import { Injectable, Logger } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class ResizeService {
  private logger = new Logger('Service');
  public resize(imageLink: string, width: number, height: number) {
    return sharp(imageLink)
      .resize(width, height)
      .png()
      .toFile('src/resizedImages/output.png');
  }
}
