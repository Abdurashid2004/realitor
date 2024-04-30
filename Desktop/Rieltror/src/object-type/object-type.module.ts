import { Module } from '@nestjs/common';
import { ObjectTypeService } from './object-type.service';
import { ObjectTypeController } from './object-type.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ObjectTypeController],
  providers: [ObjectTypeService],
})
export class ObjectTypeModule {}
