import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnerRelationService } from './owner-relation.service';
import { CreateOwnerRelationDto } from './dto/create-owner-relation.dto';
import { UpdateOwnerRelationDto } from './dto/update-owner-relation.dto';

@Controller('owner-relation')
export class OwnerRelationController {
  constructor(private readonly ownerRelationService: OwnerRelationService) {}

  @Post()
  create(@Body() createOwnerRelationDto: CreateOwnerRelationDto) {
    return this.ownerRelationService.create(createOwnerRelationDto);
  }

  @Get()
  findAll() {
    return this.ownerRelationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerRelationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnerRelationDto: UpdateOwnerRelationDto) {
    return this.ownerRelationService.update(+id, updateOwnerRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerRelationService.remove(+id);
  }
}
