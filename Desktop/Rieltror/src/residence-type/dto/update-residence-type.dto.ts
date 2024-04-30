import { PartialType } from '@nestjs/swagger';
import { CreateResidenceTypeDto } from './create-residence-type.dto';

export class UpdateResidenceTypeDto extends PartialType(CreateResidenceTypeDto) {}
