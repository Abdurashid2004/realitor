import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOwnerCooperationDto } from './dto/create-owner-cooperation.dto';
import { UpdateOwnerCooperationDto } from './dto/update-owner-cooperation.dto';

@Injectable()
export class OwnerCooperationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOwnerCooperationDto: CreateOwnerCooperationDto) {
    return this.prisma.ownerCooperation.create({
      data: createOwnerCooperationDto,
    });
  }

  async findAll() {
    return this.prisma.ownerCooperation.findMany();
  }

  async findOne(id: number) {
    return this.prisma.ownerCooperation.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateOwnerCooperationDto: UpdateOwnerCooperationDto,
  ) {
    return this.prisma.ownerCooperation.update({
      where: { id },
      data: updateOwnerCooperationDto,
    });
  }

  async remove(id: number) {
    return this.prisma.ownerCooperation.delete({
      where: { id },
    });
  }
}
