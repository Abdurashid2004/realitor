// create-object.dto.ts
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreateObjectDto {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  realtorId?: number;

  @IsInt()
  @IsOptional()
  objectTypeId?: number;

  @IsInt()
  @IsOptional()
  residenceTypeId?: number;

  @IsInt()
  @IsOptional()
  objectCategoryId?: number;

  @IsInt()
  @IsOptional()
  objectStatusId?: number;

  @IsBoolean()
  is_studio: boolean;

  @IsInt()
  floor: number;

  @IsInt()
  floors_in_building: number;

  @IsNumber()
  total_area: number;

  @IsNumber()
  live_area: number;

  @IsNumber()
  kitchen_area: number;

  @IsNumber()
  rooms_area: number;

  @IsNumber()
  price: number;

  @IsInt()
  @IsOptional()
  currencyId?: number;

  @IsNumber()
  price_per_square: number;

  @IsNumber()
  price_type: number;

  @IsInt()
  @IsOptional()
  renovationId?: number;

  @IsInt()
  @IsOptional()
  windowSideId?: number;

  @IsInt()
  @IsOptional()
  roomTypeId?: number;

  @IsBoolean()
  is_apartment: boolean;

  @IsBoolean()
  is_luxury: boolean;

  @IsNumber()
  ceiling_height: number;

  @IsInt()
  combined_bath_count: number;

  @IsInt()
  separate_bath_count: number;

  @IsInt()
  loggia_count: number;

  @IsString()
  loggia_description: string;

  @IsInt()
  balcony_count: number;

  @IsString()
  balcony_description: string;

  @IsString()
  general_description: string;

  @IsInt()
  cadastral_number: number;

  @IsString()
  document: string;

  @IsString()
  layout: string;

  @IsString()
  fotos: string;

  @IsBoolean()
  online_show: boolean;

  @IsString()
  video: string;
}
