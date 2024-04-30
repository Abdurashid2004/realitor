import { ObjectCategoryService } from './object-category.service';
import { CreateObjectCategoryDto } from './dto/create-object-category.dto';
import { UpdateObjectCategoryDto } from './dto/update-object-category.dto';
export declare class ObjectCategoryController {
    private readonly objectCategoryService;
    constructor(objectCategoryService: ObjectCategoryService);
    create(createObjectCategoryDto: CreateObjectCategoryDto): Promise<{
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
    update(id: string, updateObjectCategoryDto: UpdateObjectCategoryDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
