import { IsArray, IsString } from 'class-validator';

export class CreateRoomTypeDto {
  @IsString()
  name: string;

  @IsArray()
  objectId: any[];
}
