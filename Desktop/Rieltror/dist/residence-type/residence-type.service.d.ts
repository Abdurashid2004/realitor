import { PrismaService } from '../prisma/prisma.service';
import { ResidenceType } from '.prisma/client';
import { CreateResidenceTypeDto } from './dto/create-residence-type.dto';
import { UpdateResidenceTypeDto } from './dto/update-residence-type.dto';
export declare class ResidenceTypeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createResidenceTypeDto: CreateResidenceTypeDto): Promise<ResidenceType>;
    findAll(): Promise<ResidenceType[]>;
    findOne(id: number): Promise<ResidenceType | null>;
    update(id: number, updateResidenceTypeDto: UpdateResidenceTypeDto): Promise<ResidenceType>;
    remove(id: number): Promise<ResidenceType>;
}
