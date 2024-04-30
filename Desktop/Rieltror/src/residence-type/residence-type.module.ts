import { Module } from '@nestjs/common';
import { ResidenceTypeService } from './residence-type.service';
import { ResidenceTypeController } from './residence-type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ResidenceTypeController],
  providers: [ResidenceTypeService],
})
export class ResidenceTypeModule {}
