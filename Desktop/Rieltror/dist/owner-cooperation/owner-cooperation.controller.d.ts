import { OwnerCooperationService } from './owner-cooperation.service';
import { CreateOwnerCooperationDto } from './dto/create-owner-cooperation.dto';
import { UpdateOwnerCooperationDto } from './dto/update-owner-cooperation.dto';
export declare class OwnerCooperationController {
    private readonly ownerCooperationService;
    constructor(ownerCooperationService: OwnerCooperationService);
    create(createOwnerCooperationDto: CreateOwnerCooperationDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
    }>;
    update(id: string, updateOwnerCooperationDto: UpdateOwnerCooperationDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
