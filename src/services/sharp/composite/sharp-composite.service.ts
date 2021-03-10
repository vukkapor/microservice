import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import axios from 'axios';
import { CompositeServiceInterface } from '../../interfaces/composite-service.interface';

@Injectable()
export class SharpCompositeService implements CompositeServiceInterface {
  public async compositeFile(file1: Buffer, file2: Buffer) {
    return await sharp(file1)
      .composite([{ input: file2, gravity: 'southeast' }])
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }

  public async compositeLink(file1: string, file2: string) {
    //convert images to Buffer using axios
    const file1Buffer = (
      await axios({ url: file1, responseType: 'arraybuffer' })
    ).data as Buffer;
    const file2Buffer = (
      await axios({ url: file2, responseType: 'arraybuffer' })
    ).data as Buffer;

    return await sharp(file1Buffer)
      .composite([{ input: file2Buffer, gravity: 'southeast' }])
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }
}