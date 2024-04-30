import { ObjectTypeService } from './object-type.service';
import { CreateObjectTypeDto } from './dto/create-object-type.dto';
import { UpdateObjectTypeDto } from './dto/update-object-type.dto';
export declare class ObjectTypeController {
    private readonly objectTypeService;
    constructor(objectTypeService: ObjectTypeService);
    create(createObjectTypeDto: CreateObjectTypeDto): Promise<{
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
    update(id: string, updateObjectTypeDto: UpdateObjectTypeDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
