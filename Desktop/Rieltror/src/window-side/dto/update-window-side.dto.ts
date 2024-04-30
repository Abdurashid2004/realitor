import { PartialType } from '@nestjs/swagger';
import { CreateWindowSideDto } from './create-window-side.dto';

export class UpdateWindowSideDto extends PartialType(CreateWindowSideDto) {}
