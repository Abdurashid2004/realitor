import { Injectable } from '@nestjs/common';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ObjectCategory } from '.prisma/client'; // Assuming your Prisma model is named 'ObjectCategory'
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';


@Injectable()
export class ObjectCategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createObjectCategoryDto: CreateObjectCategoryDto,
  ): Promise<ObjectCategory> {
    return this.prismaService.objectCategory.create({
      data: createObjectCategoryDto,
    });
  }

  async findAll(): Promise<ObjectCategory[]> {
    return this.prismaService.objectCategory.findMany();
  }

  async findOne(id: number): Promise<ObjectCategory> {
    return this.prismaService.objectCategory.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateObjectCategoryDto: UpdateObjectCategoryDto,
  ): Promise<ObjectCategory> {
    return this.prismaService.objectCategory.update({
      where: { id },
      data: updateObjectCategoryDto,
    });
  }

  async remove(id: number): Promise<ObjectCategory> {
    return this.prismaService.objectCategory.delete({
      where: { id },
    });
  }
}
