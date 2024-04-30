import { PrismaService } from '../prisma/prisma.service';
import { CreateReasonDeletingDto } from './dto/create-reason-deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason-deleting.dto';
export declare class ReasonDeletingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createReasonDeletingDto: CreateReasonDeletingDto): Promise<{
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
    update(id: number, updateReasonDeletingDto: UpdateReasonDeletingDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
