import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ObjectModule } from './object/object.module';
import { ObjectTypeModule } from './object-type/object-type.module';
import { ResidenceTypeModule } from './residence-type/residence-type.module';
import { ObjectCategoryModule } from './object-category/object-category.module';
import { ObjectStatusModule } from './object-status/object-status.module';
import { CurrencyModule } from './currency/currency.module';
import { RenevotionModule } from './renevotion/renevotion.module';
import { WindowSideModule } from './window-side/window-side.module';
import { RoomTypeModule } from './room-type/room-type.module';
import { OwnerRelationModule } from './owner-relation/owner-relation.module';
import { OwnerShipModule } from './owner-ship/owner-ship.module';
import { ReasonDeletingModule } from './reason-deleting/reason-deleting.module';
import { OwnerCooperationModule } from './owner-cooperation/owner-cooperation.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ObjectModule,
    ObjectTypeModule,
    ResidenceTypeModule,
    ObjectCategoryModule,
    ObjectStatusModule,
    CurrencyModule,
    RenevotionModule,
    WindowSideModule,
    RoomTypeModule,
    OwnerRelationModule,
    OwnerShipModule,
    ReasonDeletingModule,
    OwnerCooperationModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
