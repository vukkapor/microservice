import { Injectable } from '@nestjs/common';
import { SharpCompositeService } from '../sharp/composite/sharp-composite.service';

@Injectable()
export class CompositeFactoryService {
  constructor(private sharpCompositeService: SharpCompositeService) {}

  getInstance() {
    return this.sharpCompositeService;
  }
}
