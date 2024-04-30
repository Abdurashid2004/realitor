import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWindowSideDto } from './dto/create-window-side.dto';
import { UpdateWindowSideDto } from './dto/update-window-side.dto';
import { WindowSide } from '.prisma/client';

@Injectable()
export class WindowSideService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWindowSideDto: CreateWindowSideDto): Promise<WindowSide> {
    return this.prisma.windowSide.create({
      data: createWindowSideDto,
    });
  }

  async findAll(): Promise<WindowSide[]> {
    return this.prisma.windowSide.findMany();
  }

  async findOne(id: number): Promise<WindowSide | null> {
    return this.prisma.windowSide.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateWindowSideDto: UpdateWindowSideDto,
  ): Promise<WindowSide> {
    return this.prisma.windowSide.update({
      where: { id },
      data: updateWindowSideDto,
    });
  }

  async remove(id: number): Promise<WindowSide> {
    return this.prisma.windowSide.delete({
      where: { id },
    });
  }
}
