import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectStatusService } from './object-status.service';
import { CreateObjectStatusDto } from './dto/create-object-status.dto';
import { UpdateObjectStatusDto } from './dto/update-object-status.dto';

@Controller('object-status')
export class ObjectStatusController {
  constructor(private readonly objectStatusService: ObjectStatusService) {}

  @Post()
  create(@Body() createObjectStatusDto: CreateObjectStatusDto) {
    return this.objectStatusService.create(createObjectStatusDto);
  }

  @Get()
  findAll() {
    return this.objectStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectStatusDto: UpdateObjectStatusDto) {
    return this.objectStatusService.update(+id, updateObjectStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectStatusService.remove(+id);
  }
}
