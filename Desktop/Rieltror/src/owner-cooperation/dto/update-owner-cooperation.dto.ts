import { PartialType } from '@nestjs/swagger';
import { CreateOwnerCooperationDto } from './create-owner-cooperation.dto';

export class UpdateOwnerCooperationDto extends PartialType(CreateOwnerCooperationDto) {}
