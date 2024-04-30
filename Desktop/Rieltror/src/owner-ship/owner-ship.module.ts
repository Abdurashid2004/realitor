import { Module } from '@nestjs/common';
import { OwnerShipService } from './owner-ship.service';
import { OwnerShipController } from './owner-ship.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OwnerShipController],
  providers: [OwnerShipService],
})
export class OwnerShipModule {}
