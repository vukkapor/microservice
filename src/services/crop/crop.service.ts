import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import axios from 'axios';

@Injectable()
export class CropService {
  public async cropFile(
    file: Buffer,
    left: number,
    top: number,
    width: number,
    height: number,
  ) {
    return await sharp(file)
      .extract({ left: left, top: top, width: width, height: height })
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }

  public async cropLink(
    file: string,
    left: number,
    top: number,
    width: number,
    height: number,
  ) {
    const fileBuffer = (await axios({ url: file, responseType: 'arraybuffer' }))
      .data as Buffer;

    return await sharp(fileBuffer)
      .extract({ left: left, top: top, width: width, height: height })
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }
}
