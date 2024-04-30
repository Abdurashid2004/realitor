import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Object } from '.prisma/client';
export declare class ObjectService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createObjectDto: CreateObjectDto): Promise<Object>;
    findAll(): Promise<Object[]>;
    findOne(id: number): Promise<Object>;
    update(id: number, updateObjectDto: UpdateObjectDto): Promise<Object>;
    remove(id: number): Promise<Object>;
}
