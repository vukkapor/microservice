import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class CompositeService {
  public async composite(imageLink: string, imageLink2: string) {
    return await sharp(imageLink)
      .composite([{ input: imageLink2, gravity: 'southeast' }])
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }
}
