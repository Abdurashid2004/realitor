import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOwnerRelationDto } from './dto/create-owner-relation.dto';
import { UpdateOwnerRelationDto } from './dto/update-owner-relation.dto';

@Injectable()
export class OwnerRelationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOwnerRelationDto: CreateOwnerRelationDto) {
    const createdOwnerRelation = await this.prisma.ownerRelation.create({
      data: createOwnerRelationDto,
    });
    return createdOwnerRelation;
  }

  async findAll() {
    const allOwnerRelations = await this.prisma.ownerRelation.findMany();
    return allOwnerRelations;
  }

  async findOne(id: number) {
    const ownerRelation = await this.prisma.ownerRelation.findUnique({
      where: { id },
    });
    return ownerRelation;
  }

  async update(id: number, updateOwnerRelationDto: UpdateOwnerRelationDto) {
    const updatedOwnerRelation = await this.prisma.ownerRelation.update({
      where: { id },
      data: updateOwnerRelationDto,
    });
    return updatedOwnerRelation;
  }

  async remove(id: number) {
    const deletedOwnerRelation = await this.prisma.ownerRelation.delete({
      where: { id },
    });
    return deletedOwnerRelation;
  }
}
