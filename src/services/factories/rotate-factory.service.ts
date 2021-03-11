import { Injectable } from '@nestjs/common';
import { SharpRotateService } from '../sharp/rotate/sharp-rotate.service';
import { JimpRotateService } from '../jimp/rotate/jimp-rotate.service';

@Injectable()
export class RotateFactoryService {
  readonly TYPE_SHARP = 1;
  readonly TYPE_JIMP = 2;

  constructor(
    private sharpRotateService: SharpRotateService,
    private jimpRotateService: JimpRotateService,
  ) {}

  getInstance(type: number = this.TYPE_SHARP) {
    if (type === this.TYPE_JIMP) {
      return this.jimpRotateService;
    }
    return this.sharpRotateService;
  }
}
