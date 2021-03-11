import { Injectable } from '@nestjs/common';
import { CompositeServiceInterface } from '../../interfaces/composite-service.interface';
import Jimp from 'jimp';
import * as jimp from 'jimp';

@Injectable()
export class JimpCompositeService implements CompositeServiceInterface {
  public async compositeFile(
    file: Buffer,
    watermark: Buffer,
    left: number,
    top: number,
  ) {
    const watermarkImage = await Jimp.read(watermark);

    return await jimp.read(file).then((image) => {
      return image
        .composite(watermarkImage, left, top, {
          mode: Jimp.BLEND_SOURCE_OVER,
          opacityDest: 1,
          opacitySource: 0.5,
        })
        .getBase64Async(image.getMIME());
    });
  }

  public async compositeLink(
    file: string,
    watermark: string,
    left: number,
    top: number,
  ) {
    const watermarkImage = await Jimp.read(watermark);

    return await jimp.read(file).then((image) => {
      return image
        .composite(watermarkImage, left, top, {
          mode: Jimp.BLEND_SOURCE_OVER,
          opacityDest: 1,
          opacitySource: 0.5,
        })
        .getBase64Async(image.getMIME());
    });
  }
}
