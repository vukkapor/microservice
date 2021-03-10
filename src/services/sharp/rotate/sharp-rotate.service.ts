import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import axios from 'axios';
import {RotateServiceInterface} from "../../interfaces/rotate-service.interface";

@Injectable()
export class SharpRotateService implements RotateServiceInterface{
  public async rotateFile(file: Buffer, angle: number) {
    return await sharp(file)
      .rotate(angle)
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }

  public async rotateLink(file: string, angle: number) {
    const fileBuffer = (await axios({ url: file, responseType: 'arraybuffer' }))
      .data as Buffer;
    return await sharp(fileBuffer)
      .rotate(angle)
      .png()
      .toBuffer()
      .then((value) => {
        return value.toString('base64');
      })
      .catch();
  }
}
