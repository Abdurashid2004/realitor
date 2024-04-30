import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnerShipService } from './owner-ship.service';
import { CreateOwnerShipDto } from './dto/create-owner-ship.dto';
import { UpdateOwnerShipDto } from './dto/update-owner-ship.dto';

@Controller('owner-ship')
export class OwnerShipController {
  constructor(private readonly ownerShipService: OwnerShipService) {}

  @Post()
  create(@Body() createOwnerShipDto: CreateOwnerShipDto) {
    return this.ownerShipService.create(createOwnerShipDto);
  }

  @Get()
  findAll() {
    return this.ownerShipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerShipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnerShipDto: UpdateOwnerShipDto) {
    return this.ownerShipService.update(+id, updateOwnerShipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerShipService.remove(+id);
  }
}
