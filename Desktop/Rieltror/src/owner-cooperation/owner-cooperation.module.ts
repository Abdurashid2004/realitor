import { Module } from '@nestjs/common';
import { OwnerCooperationService } from './owner-cooperation.service';
import { OwnerCooperationController } from './owner-cooperation.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OwnerCooperationController],
  providers: [OwnerCooperationService],
})
export class OwnerCooperationModule {}
