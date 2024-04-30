import { PrismaService } from '../prisma/prisma.service';
import { CreateRenevotionDto } from './dto/create-renevotion.dto';
import { UpdateRenevotionDto } from './dto/update-renevotion.dto';
export declare class RenevotionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createRenevotionDto: CreateRenevotionDto): Promise<{
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
    update(id: number, updateRenevotionDto: UpdateRenevotionDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
