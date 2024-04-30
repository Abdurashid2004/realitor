import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectTypeService } from './object-type.service';
import { CreateObjectTypeDto } from './dto/create-object-type.dto';
import { UpdateObjectTypeDto } from './dto/update-object-type.dto';

@Controller('object-type')
export class ObjectTypeController {
  constructor(private readonly objectTypeService: ObjectTypeService) {}

  @Post()
  create(@Body() createObjectTypeDto: CreateObjectTypeDto) {
    return this.objectTypeService.create(createObjectTypeDto);
  }

  @Get()
  findAll() {
    return this.objectTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectTypeDto: UpdateObjectTypeDto) {
    return this.objectTypeService.update(+id, updateObjectTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectTypeService.remove(+id);
  }
}
