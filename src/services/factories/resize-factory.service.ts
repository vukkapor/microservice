import { Injectable } from '@nestjs/common';
import { SharpResizeService } from '../sharp/resize/sharp-resize.service';
import { JimpResizeService } from '../jimp/resize/jimp-resize.service';

@Injectable()
export class ResizeFactoryService {
  readonly TYPE_SHARP = 1;
  readonly TYPE_JIMP = 2;

  constructor(
    private sharpResizeService: SharpResizeService,
    private jimpResizeService: JimpResizeService,
  ) {}

  getInstance(type: number = this.TYPE_SHARP) {
    if (type === this.TYPE_JIMP) {
      return this.jimpResizeService;
    }
    return this.sharpResizeService;
  }
}
