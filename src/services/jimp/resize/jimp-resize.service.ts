import { Injectable } from '@nestjs/common';
import { ResizeServiceInterface } from '../../interfaces/resize-service.interface';
import Jimp from 'jimp';
import * as jimp from 'jimp';

@Injectable()
export class JimpResizeService implements ResizeServiceInterface {
  public async resizeFile(file: Buffer, width: number, height: number) {
    return await jimp.read(file).then((image) => {
      return image.resize(width, height).getBase64Async(image.getMIME());
    });
  }
  public async resizeLink(file: string, width: number, height: number) {
    return await jimp.read(file).then((image) => {
      return image.resize(width, height).getBase64Async(image.getMIME());
    });
  }
}
