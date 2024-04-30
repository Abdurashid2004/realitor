import { PartialType } from '@nestjs/swagger';
import { CreateObjectCategoryDto } from './create-object-category.dto';

export class UpdateObjectCategoryDto extends PartialType(CreateObjectCategoryDto) {}
