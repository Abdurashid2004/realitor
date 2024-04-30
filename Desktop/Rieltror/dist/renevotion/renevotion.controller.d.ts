import { RenevotionService } from './renevotion.service';
import { CreateRenevotionDto } from './dto/create-renevotion.dto';
import { UpdateRenevotionDto } from './dto/update-renevotion.dto';
export declare class RenevotionController {
    private readonly renevotionService;
    constructor(renevotionService: RenevotionService);
    create(createRenevotionDto: CreateRenevotionDto): Promise<{
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
    update(id: string, updateRenevotionDto: UpdateRenevotionDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
