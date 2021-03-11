import { Injectable } from '@nestjs/common';
import { RotateServiceInterface } from '../../interfaces/rotate-service.interface';
import Jimp from 'jimp';
import * as jimp from 'jimp';

@Injectable()
export class JimpRotateService implements RotateServiceInterface {
  public async rotateFile(file: Buffer, angle: number) {
    return await jimp.read(file).then((image) => {
      return image.rotate(angle).getBase64Async(image.getMIME());
    });
  }
  public async rotateLink(file: string, angle: number) {
    return await jimp.read(file).then((image) => {
      return image.rotate(angle).getBase64Async(image.getMIME());
    });
  }
}
