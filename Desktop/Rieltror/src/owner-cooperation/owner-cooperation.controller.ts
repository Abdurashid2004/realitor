import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnerCooperationService } from './owner-cooperation.service';
import { CreateOwnerCooperationDto } from './dto/create-owner-cooperation.dto';
import { UpdateOwnerCooperationDto } from './dto/update-owner-cooperation.dto';

@Controller('owner-cooperation')
export class OwnerCooperationController {
  constructor(private readonly ownerCooperationService: OwnerCooperationService) {}

  @Post()
  create(@Body() createOwnerCooperationDto: CreateOwnerCooperationDto) {
    return this.ownerCooperationService.create(createOwnerCooperationDto);
  }

  @Get()
  findAll() {
    return this.ownerCooperationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerCooperationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnerCooperationDto: UpdateOwnerCooperationDto) {
    return this.ownerCooperationService.update(+id, updateOwnerCooperationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerCooperationService.remove(+id);
  }
}
