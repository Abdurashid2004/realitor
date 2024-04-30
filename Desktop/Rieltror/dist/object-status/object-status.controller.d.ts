import { ObjectStatusService } from './object-status.service';
import { CreateObjectStatusDto } from './dto/create-object-status.dto';
import { UpdateObjectStatusDto } from './dto/update-object-status.dto';
export declare class ObjectStatusController {
    private readonly objectStatusService;
    constructor(objectStatusService: ObjectStatusService);
    create(createObjectStatusDto: CreateObjectStatusDto): Promise<{
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
    update(id: string, updateObjectStatusDto: UpdateObjectStatusDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
