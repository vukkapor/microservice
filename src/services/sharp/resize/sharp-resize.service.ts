import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import axios from 'axios';
import { ResizeServiceInterface } from '../../interfaces/resize-service.interface';

@Injectable()
export class SharpResizeService implements ResizeServiceInterface {
  public async resizeFile(file: Buffer, width: number, height: number) {
    return await sharp(file)
      .resize(width, height, { fit: sharp.fit.contain })
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }

  public async resizeLink(file: string, width: number, height: number) {
    const fileBuffer = (await axios({ url: file, responseType: 'arraybuffer' }))
      .data as Buffer;
    return await sharp(fileBuffer)
      .resize(width, height, { fit: sharp.fit.contain })
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }
}
