import { PrismaService } from '../prisma/prisma.service';
import { ObjectType } from '.prisma/client';
import { CreateObjectTypeDto } from './dto/create-object-type.dto';
import { UpdateObjectTypeDto } from './dto/update-object-type.dto';
export declare class ObjectTypeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createObjectTypeDto: CreateObjectTypeDto): Promise<ObjectType>;
    findAll(): Promise<ObjectType[]>;
    findOne(id: number): Promise<ObjectType | null>;
    update(id: number, updateObjectTypeDto: UpdateObjectTypeDto): Promise<ObjectType | null>;
    remove(id: number): Promise<ObjectType | null>;
}
