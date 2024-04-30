import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Currency } from '.prisma/client';

@Injectable()
export class CurrencyService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCurrencyDto: CreateCurrencyDto): Promise<Currency> {
    return this.prismaService.currency.create({
      data: createCurrencyDto,
    });
  }

  async findAll(): Promise<Currency[]> {
    return this.prismaService.currency.findMany();
  }

  async findOne(id: number): Promise<Currency> {
    return this.prismaService.currency.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateCurrencyDto: UpdateCurrencyDto,
  ): Promise<Currency> {
    return this.prismaService.currency.update({
      where: { id },
      data: updateCurrencyDto,
    });
  }

  async remove(id: number): Promise<Currency> {
    return this.prismaService.currency.delete({
      where: { id },
    });
  }
}
