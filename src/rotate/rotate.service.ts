import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class RotateService {
  public async rotate(imageLink: string, angle: number) {
    return await sharp(imageLink)
      .rotate(angle)
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }
}
