import { WindowSideService } from './window-side.service';
import { CreateWindowSideDto } from './dto/create-window-side.dto';
import { UpdateWindowSideDto } from './dto/update-window-side.dto';
export declare class WindowSideController {
    private readonly windowSideService;
    constructor(windowSideService: WindowSideService);
    create(createWindowSideDto: CreateWindowSideDto): Promise<{
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
    update(id: string, updateWindowSideDto: UpdateWindowSideDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
