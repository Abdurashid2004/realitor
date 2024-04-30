import { CreateObjectDto } from '../../object/dto/create-object.dto';
import { CreateResidenceTypeDto } from '../../residence-type/dto/create-residence-type.dto';
export declare class CreateObjectCategoryDto {
    name: string;
    objectId: CreateObjectDto;
    residenceTypeId: CreateResidenceTypeDto[];
}
