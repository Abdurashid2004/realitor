import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ObjectType } from '.prisma/client';
import { CreateObjectTypeDto } from './dto/create-object-type.dto';
import { UpdateObjectTypeDto } from './dto/update-object-type.dto';

@Injectable()
export class ObjectTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createObjectTypeDto: CreateObjectTypeDto): Promise<ObjectType> {
    return this.prisma.objectType.create({ data: createObjectTypeDto });
  }

  async findAll(): Promise<ObjectType[]> {
    return this.prisma.objectType.findMany();
  }

  async findOne(id: number): Promise<ObjectType | null> {
    return this.prisma.objectType.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateObjectTypeDto: UpdateObjectTypeDto,
  ): Promise<ObjectType | null> {
    return this.prisma.objectType.update({
      where: { id },
      data: updateObjectTypeDto,
    });
  }

  async remove(id: number): Promise<ObjectType | null> {
    return this.prisma.objectType.delete({ where: { id } });
  }
}
