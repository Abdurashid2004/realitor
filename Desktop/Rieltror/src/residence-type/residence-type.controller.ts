import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResidenceTypeService } from './residence-type.service';
import { CreateResidenceTypeDto } from './dto/create-residence-type.dto';
import { UpdateResidenceTypeDto } from './dto/update-residence-type.dto';

@Controller('residence-type')
export class ResidenceTypeController {
  constructor(private readonly residenceTypeService: ResidenceTypeService) {}

  @Post()
  create(@Body() createResidenceTypeDto: CreateResidenceTypeDto) {
    return this.residenceTypeService.create(createResidenceTypeDto);
  }

  @Get()
  findAll() {
    return this.residenceTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.residenceTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResidenceTypeDto: UpdateResidenceTypeDto) {
    return this.residenceTypeService.update(+id, updateResidenceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.residenceTypeService.remove(+id);
  }
}
