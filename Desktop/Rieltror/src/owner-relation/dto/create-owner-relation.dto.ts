import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { isFloat32Array } from 'util/types';

export class CreateOwnerRelationDto {
  @IsNumber()
  @IsOptional()
  ownerShipId?: number;

  @IsNumber()
  @IsOptional()
  reasonDeletingId?: number;

  @IsNumber()
  @IsOptional()
  ownerCooperationId?: number;

  @IsNumber()
  @IsOptional()
  relationshipTypeId?: number;

  @IsNumber()
  commission_amount: number;

  @IsString()
  @IsNotEmpty()
  commission_comment: string;

  @IsNumber()
  deposit_amount: number;

  @IsNumber()
  deposit_paid: number;

  @IsNumber()
  owner_price_ideal: number;

  @IsNumber()
  owner_price_real: number;

  @IsNumber()
  owner_price_minimal: number;
}
