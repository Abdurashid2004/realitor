import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRenevotionDto } from './dto/create-renevotion.dto';
import { UpdateRenevotionDto } from './dto/update-renevotion.dto';

@Injectable()
export class RenevotionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRenevotionDto: CreateRenevotionDto) {
    return this.prisma.renovation.create({ data: createRenevotionDto });
  }

  async findAll() {
    return this.prisma.renovation.findMany();
  }

  async findOne(id: number) {
    return this.prisma.renovation.findUnique({ where: { id } });
  }

  async update(id: number, updateRenevotionDto: UpdateRenevotionDto) {
    return this.prisma.renovation.update({
      where: { id },
      data: updateRenevotionDto,
    });
  }

  async remove(id: number) {
    return this.prisma.renovation.delete({ where: { id } });
  }
}
