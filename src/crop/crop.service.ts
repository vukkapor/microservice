import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class CropService {
  public async crop(
    imageLink: string,
    left: number,
    top: number,
    width: number,
    height: number,
  ) {
    return await sharp(imageLink)
      .extract({ left: left, top: top, width: width, height: height })
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }
}
