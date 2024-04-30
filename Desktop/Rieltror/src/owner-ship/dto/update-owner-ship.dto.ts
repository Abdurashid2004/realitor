import { PartialType } from '@nestjs/swagger';
import { CreateOwnerShipDto } from './create-owner-ship.dto';

export class UpdateOwnerShipDto extends PartialType(CreateOwnerShipDto) {}
