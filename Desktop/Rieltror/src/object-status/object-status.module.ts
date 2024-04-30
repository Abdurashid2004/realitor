import { Module } from '@nestjs/common';
import { ObjectStatusService } from './object-status.service';
import { ObjectStatusController } from './object-status.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ObjectStatusController],
  providers: [ObjectStatusService],
})
export class ObjectStatusModule {}
