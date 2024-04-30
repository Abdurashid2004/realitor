import { ResidenceTypeService } from './residence-type.service';
import { CreateResidenceTypeDto } from './dto/create-residence-type.dto';
import { UpdateResidenceTypeDto } from './dto/update-residence-type.dto';
export declare class ResidenceTypeController {
    private readonly residenceTypeService;
    constructor(residenceTypeService: ResidenceTypeService);
    create(createResidenceTypeDto: CreateResidenceTypeDto): Promise<{
        id: number;
        name: string;
        objectTypeId: number;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        objectTypeId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        objectTypeId: number;
    }>;
    update(id: string, updateResidenceTypeDto: UpdateResidenceTypeDto): Promise<{
        id: number;
        name: string;
        objectTypeId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        objectTypeId: number;
    }>;
}
