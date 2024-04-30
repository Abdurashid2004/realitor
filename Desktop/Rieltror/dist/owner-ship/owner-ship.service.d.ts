import { PrismaService } from '../prisma/prisma.service';
import { CreateOwnerShipDto } from './dto/create-owner-ship.dto';
import { UpdateOwnerShipDto } from './dto/update-owner-ship.dto';
export declare class OwnerShipService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createOwnerShipDto: CreateOwnerShipDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
    update(id: number, updateOwnerShipDto: UpdateOwnerShipDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
