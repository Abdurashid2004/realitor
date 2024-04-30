import { PartialType } from '@nestjs/swagger';
import { CreateReasonDeletingDto } from './create-reason-deleting.dto';

export class UpdateReasonDeletingDto extends PartialType(CreateReasonDeletingDto) {}
