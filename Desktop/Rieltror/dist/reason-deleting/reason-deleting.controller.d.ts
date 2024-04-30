import { ReasonDeletingService } from './reason-deleting.service';
import { CreateReasonDeletingDto } from './dto/create-reason-deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason-deleting.dto';
export declare class ReasonDeletingController {
    private readonly reasonDeletingService;
    constructor(reasonDeletingService: ReasonDeletingService);
    create(createReasonDeletingDto: CreateReasonDeletingDto): Promise<{
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
    update(id: string, updateReasonDeletingDto: UpdateReasonDeletingDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
