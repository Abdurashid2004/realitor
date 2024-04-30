import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ObjectCategory } from '.prisma/client';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
export declare class ObjectCategoryService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createObjectCategoryDto: CreateObjectCategoryDto): Promise<ObjectCategory>;
    findAll(): Promise<ObjectCategory[]>;
    findOne(id: number): Promise<ObjectCategory>;
    update(id: number, updateObjectCategoryDto: UpdateObjectCategoryDto): Promise<ObjectCategory>;
    remove(id: number): Promise<ObjectCategory>;
}
