import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReasonDeletingDto } from './dto/create-reason-deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason-deleting.dto';

@Injectable()
export class ReasonDeletingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReasonDeletingDto: CreateReasonDeletingDto) {
    return await this.prisma.reasonDeleting.create({
      data: createReasonDeletingDto,
    });
  }

  async findAll() {
    return await this.prisma.reasonDeleting.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.reasonDeleting.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateReasonDeletingDto: UpdateReasonDeletingDto) {
    return await this.prisma.reasonDeleting.update({
      where: {
        id,
      },
      data: updateReasonDeletingDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.reasonDeleting.delete({
      where: {
        id,
      },
    });
  }
}
