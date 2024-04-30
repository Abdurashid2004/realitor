import { Injectable } from '@nestjs/common';
import { CreateObjectStatusDto } from './dto/create-object-status.dto';
import { UpdateObjectStatusDto } from './dto/update-object-status.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ObjectStatus } from '.prisma/client'; // Assuming your Prisma model is named 'ObjectStatus'

@Injectable()
export class ObjectStatusService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createObjectStatusDto: CreateObjectStatusDto,
  ): Promise<ObjectStatus> {
    return this.prismaService.objectStatus.create({
      data: createObjectStatusDto,
    });
  }

  async findAll(): Promise<ObjectStatus[]> {
    return this.prismaService.objectStatus.findMany();
  }

  async findOne(id: number): Promise<ObjectStatus> {
    return this.prismaService.objectStatus.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateObjectStatusDto: UpdateObjectStatusDto,
  ): Promise<ObjectStatus> {
    return this.prismaService.objectStatus.update({
      where: { id },
      data: updateObjectStatusDto,
    });
  }

  async remove(id: number): Promise<ObjectStatus> {
    return this.prismaService.objectStatus.delete({
      where: { id },
    });
  }
}
