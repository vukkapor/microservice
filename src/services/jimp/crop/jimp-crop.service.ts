import { Injectable } from '@nestjs/common';
import { CropServiceInterface } from '../../interfaces/crop-service.interface';
import * as jimp from 'jimp';

@Injectable()
export class JimpCropService implements CropServiceInterface {
  public async cropFile(
    file: Buffer,
    left: number,
    top: number,
    width: number,
    height: number,
  ) {
    return await jimp.read(file).then((image) => {
      return image
        .crop(left, top, width, height)
        .getBase64Async(image.getMIME());
    });
  }

  public async cropLink(
    file: string,
    left: number,
    top: number,
    width: number,
    height: number,
  ) {
    return await jimp.read(file).then((image) => {
      return image
        .crop(left, top, width, height)
        .getBase64Async(image.getMIME());
    });
  }
}
