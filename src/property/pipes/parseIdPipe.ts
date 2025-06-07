import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

// to use it outside this module
@Injectable()
export class PareseIdPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Id must be a number');
    }
    if (val <= 0) {
      throw new BadRequestException('Id must be Positive');
    }
    return val;
  }
}
