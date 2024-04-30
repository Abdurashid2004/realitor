import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOwnerShipDto } from './dto/create-owner-ship.dto';
import { UpdateOwnerShipDto } from './dto/update-owner-ship.dto';

@Injectable()
export class OwnerShipService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOwnerShipDto: CreateOwnerShipDto) {
    const createdOwnerShip = await this.prisma.ownerShip.create({
      data: createOwnerShipDto,
    });
    return createdOwnerShip;
  }

  async findAll() {
    const allOwnerShips = await this.prisma.ownerShip.findMany();
    return allOwnerShips;
  }

  async findOne(id: number) {
    const ownerShip = await this.prisma.ownerShip.findUnique({
      where: { id },
    });
    return ownerShip;
  }

  async update(id: number, updateOwnerShipDto: UpdateOwnerShipDto) {
    const updatedOwnerShip = await this.prisma.ownerShip.update({
      where: { id },
      data: updateOwnerShipDto,
    });
    return updatedOwnerShip;
  }

  async remove(id: number) {
    const deletedOwnerShip = await this.prisma.ownerShip.delete({
      where: { id },
    });
    return deletedOwnerShip;
  }
}
