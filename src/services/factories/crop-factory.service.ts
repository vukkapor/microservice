import { Injectable } from '@nestjs/common';
import { SharpCropService } from '../sharp/crop/sharp-crop.service';
import { JimpCropService } from '../jimp/crop/jimp-crop.service';

@Injectable()
export class CropFactoryService {
  readonly TYPE_SHARP = 1;
  readonly TYPE_JIMP = 2;

  constructor(
    private sharpCropService: SharpCropService,
    private jimpCropService: JimpCropService,
  ) {}

  getInstance(type: number = this.TYPE_SHARP) {
    if (type === this.TYPE_JIMP) {
      return this.jimpCropService;
    }
    return this.sharpCropService;
  }
}
