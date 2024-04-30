import { Module } from '@nestjs/common';
import { ReasonDeletingService } from './reason-deleting.service';
import { ReasonDeletingController } from './reason-deleting.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReasonDeletingController],
  providers: [ReasonDeletingService],
})
export class ReasonDeletingModule {}
