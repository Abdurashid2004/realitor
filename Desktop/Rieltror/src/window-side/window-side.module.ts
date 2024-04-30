import { Module } from '@nestjs/common';
import { WindowSideService } from './window-side.service';
import { WindowSideController } from './window-side.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WindowSideController],
  providers: [WindowSideService],
})
export class WindowSideModule {}
