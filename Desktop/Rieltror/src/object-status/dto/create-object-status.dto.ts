import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateObjectStatusDto {
  @IsString()
  name: string;

  @IsArray()
  @Type(() => Object)
  objectId: Object[];
}
