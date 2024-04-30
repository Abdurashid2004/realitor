import { PrismaService } from '../prisma/prisma.service';
import { CreateOwnerCooperationDto } from './dto/create-owner-cooperation.dto';
import { UpdateOwnerCooperationDto } from './dto/update-owner-cooperation.dto';
export declare class OwnerCooperationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createOwnerCooperationDto: CreateOwnerCooperationDto): Promise<{
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
    update(id: number, updateOwnerCooperationDto: UpdateOwnerCooperationDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
