import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';

@Injectable()
export class RoomTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoomTypeDto: CreateRoomTypeDto) {
    return this.prisma.roomType.create({
      data: createRoomTypeDto,
    });
  }

  async findAll() {
    return this.prisma.roomType.findMany();
  }

  async findOne(id: number) {
    return this.prisma.roomType.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRoomTypeDto: UpdateRoomTypeDto) {
    return this.prisma.roomType.update({
      where: { id },
      data: updateRoomTypeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.roomType.delete({
      where: { id },
    });
  }
}
