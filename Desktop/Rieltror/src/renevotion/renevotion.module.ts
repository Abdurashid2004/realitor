import { Module } from '@nestjs/common';
import { RenevotionService } from './renevotion.service';
import { RenevotionController } from './renevotion.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RenevotionController],
  providers: [RenevotionService],
})
export class RenevotionModule {}
