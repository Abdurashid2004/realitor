import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReasonDeletingService } from './reason-deleting.service';
import { CreateReasonDeletingDto } from './dto/create-reason-deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason-deleting.dto';

@Controller('reason-deleting')
export class ReasonDeletingController {
  constructor(private readonly reasonDeletingService: ReasonDeletingService) {}

  @Post()
  create(@Body() createReasonDeletingDto: CreateReasonDeletingDto) {
    return this.reasonDeletingService.create(createReasonDeletingDto);
  }

  @Get()
  findAll() {
    return this.reasonDeletingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reasonDeletingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReasonDeletingDto: UpdateReasonDeletingDto) {
    return this.reasonDeletingService.update(+id, updateReasonDeletingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reasonDeletingService.remove(+id);
  }
}
