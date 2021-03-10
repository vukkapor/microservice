import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

@Injectable()
export class ResizeService {
  public async resizeToBase64(
    imageLink: string,
    width: number,
    height: number,
  ) {
    return await sharp(imageLink)
      .resize(width, height, { fit: sharp.fit.contain })
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }

  // Sumnjam da ce trebati
  public resizeToFile(imageLink: string, width: number, height: number) {
    return sharp(imageLink)
      .resize(width, height)
      .toFile('src/resizedImages/' + randomStringGenerator());
  }
}
