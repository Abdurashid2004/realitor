import { PartialType } from '@nestjs/swagger';
import { CreateRenevotionDto } from './create-renevotion.dto';

export class UpdateRenevotionDto extends PartialType(CreateRenevotionDto) {}
