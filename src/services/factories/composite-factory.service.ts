import { Injectable } from '@nestjs/common';
import { SharpCompositeService } from '../sharp/composite/sharp-composite.service';
import { JimpCompositeService } from '../jimp/composite/jimp-composite.service';

@Injectable()
export class CompositeFactoryService {
  readonly TYPE_SHARP = 1;
  readonly TYPE_JIMP = 2;

  constructor(
    private sharpCompositeService: SharpCompositeService,
    private jimpCompositeService: JimpCompositeService,
  ) {}

  getInstance(type: number = this.TYPE_SHARP) {
    if (type === this.TYPE_JIMP) {
      return this.jimpCompositeService;
    }
    return this.sharpCompositeService;
  }
}
