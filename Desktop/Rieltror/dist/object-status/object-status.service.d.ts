import { CreateObjectStatusDto } from './dto/create-object-status.dto';
import { UpdateObjectStatusDto } from './dto/update-object-status.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ObjectStatus } from '.prisma/client';
export declare class ObjectStatusService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createObjectStatusDto: CreateObjectStatusDto): Promise<ObjectStatus>;
    findAll(): Promise<ObjectStatus[]>;
    findOne(id: number): Promise<ObjectStatus>;
    update(id: number, updateObjectStatusDto: UpdateObjectStatusDto): Promise<ObjectStatus>;
    remove(id: number): Promise<ObjectStatus>;
}
