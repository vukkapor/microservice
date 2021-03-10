import { Injectable } from '@nestjs/common';
import { SharpCropService } from '../sharp/crop/sharp-crop.service';

@Injectable()
export class CropFactoryService {
  constructor(private sharpCropService: SharpCropService) {}

  getInstance() {
    return this.sharpCropService;
  }
}
