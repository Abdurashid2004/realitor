import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectCategoryService } from './object-category.service';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';

@Controller('object-category')
export class ObjectCategoryController {
  constructor(private readonly objectCategoryService: ObjectCategoryService) {}

  @Post()
  create(@Body() createObjectCategoryDto: CreateObjectCategoryDto) {
    return this.objectCategoryService.create(createObjectCategoryDto);
  }

  @Get()
  findAll() {
    return this.objectCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectCategoryDto: UpdateObjectCategoryDto) {
    return this.objectCategoryService.update(+id, updateObjectCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectCategoryService.remove(+id);
  }
}
