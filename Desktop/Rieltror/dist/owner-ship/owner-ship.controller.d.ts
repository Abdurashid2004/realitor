import { OwnerShipService } from './owner-ship.service';
import { CreateOwnerShipDto } from './dto/create-owner-ship.dto';
import { UpdateOwnerShipDto } from './dto/update-owner-ship.dto';
export declare class OwnerShipController {
    private readonly ownerShipService;
    constructor(ownerShipService: OwnerShipService);
    create(createOwnerShipDto: CreateOwnerShipDto): Promise<{
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
    update(id: string, updateOwnerShipDto: UpdateOwnerShipDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
