import { Injectable } from '@nestjs/common';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Object } from '.prisma/client'; 

@Injectable()
export class ObjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createObjectDto: CreateObjectDto): Promise<Object> {
    return this.prismaService.object.create({
      data: createObjectDto,
    });
  }

  async findAll(): Promise<Object[]> {
    return this.prismaService.object.findMany();
  }

  async findOne(id: number): Promise<Object> {
    return this.prismaService.object.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateObjectDto: UpdateObjectDto): Promise<Object> {
    return this.prismaService.object.update({
      where: { id },
      data: updateObjectDto,
    });
  }

  async remove(id: number): Promise<Object> {
    return this.prismaService.object.delete({
      where: { id },
    });
  }
}
