import { Module } from '@nestjs/common';
import { OwnerRelationService } from './owner-relation.service';
import { OwnerRelationController } from './owner-relation.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OwnerRelationController],
  providers: [OwnerRelationService],
})
export class OwnerRelationModule {}
