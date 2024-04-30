import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ResidenceType } from '.prisma/client';
import { CreateResidenceTypeDto } from './dto/create-residence-type.dto';
import { UpdateResidenceTypeDto } from './dto/update-residence-type.dto';

@Injectable()
export class ResidenceTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createResidenceTypeDto: CreateResidenceTypeDto,
  ): Promise<ResidenceType> {
    return this.prisma.residenceType.create({
      data: createResidenceTypeDto,
    });
  }

  async findAll(): Promise<ResidenceType[]> {
    return this.prisma.residenceType.findMany();
  }

  async findOne(id: number): Promise<ResidenceType | null> {
    return this.prisma.residenceType.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateResidenceTypeDto: UpdateResidenceTypeDto,
  ): Promise<ResidenceType> {
    return this.prisma.residenceType.update({
      where: {
        id,
      },
      data: updateResidenceTypeDto,
    });
  }

  async remove(id: number): Promise<ResidenceType> {
    return this.prisma.residenceType.delete({
      where: {
        id,
      },
    });
  }
}
