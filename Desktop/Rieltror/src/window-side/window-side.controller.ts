import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WindowSideService } from './window-side.service';
import { CreateWindowSideDto } from './dto/create-window-side.dto';
import { UpdateWindowSideDto } from './dto/update-window-side.dto';

@Controller('window-side')
export class WindowSideController {
  constructor(private readonly windowSideService: WindowSideService) {}

  @Post()
  create(@Body() createWindowSideDto: CreateWindowSideDto) {
    return this.windowSideService.create(createWindowSideDto);
  }

  @Get()
  findAll() {
    return this.windowSideService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.windowSideService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWindowSideDto: UpdateWindowSideDto) {
    return this.windowSideService.update(+id, updateWindowSideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.windowSideService.remove(+id);
  }
}
