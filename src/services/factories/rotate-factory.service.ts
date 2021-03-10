import { Injectable } from '@nestjs/common';
import {SharpRotateService} from "../sharp/rotate/sharp-rotate.service";

@Injectable()
export class RotateFactoryService {
  constructor(private sharpRotateService: SharpRotateService) {}

  getInstance() {
    return this.sharpRotateService;
  }
}
