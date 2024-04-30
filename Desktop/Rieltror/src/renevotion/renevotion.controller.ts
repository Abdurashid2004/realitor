import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RenevotionService } from './renevotion.service';
import { CreateRenevotionDto } from './dto/create-renevotion.dto';
import { UpdateRenevotionDto } from './dto/update-renevotion.dto';

@Controller('renevotion')
export class RenevotionController {
  constructor(private readonly renevotionService: RenevotionService) {}

  @Post()
  create(@Body() createRenevotionDto: CreateRenevotionDto) {
    return this.renevotionService.create(createRenevotionDto);
  }

  @Get()
  findAll() {
    return this.renevotionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.renevotionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRenevotionDto: UpdateRenevotionDto) {
    return this.renevotionService.update(+id, updateRenevotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.renevotionService.remove(+id);
  }
}
