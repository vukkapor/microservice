import { Injectable } from '@nestjs/common';
import {SharpResizeService} from "../sharp/resize/sharp-resize.service";

@Injectable()
export class ResizeFactoryService {
  constructor(private sharpResizeService: SharpResizeService) {}

  getInstance() {
    return this.sharpResizeService;
  }
}
