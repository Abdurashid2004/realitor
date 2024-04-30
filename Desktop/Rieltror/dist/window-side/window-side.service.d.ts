import { PrismaService } from '../prisma/prisma.service';
import { CreateWindowSideDto } from './dto/create-window-side.dto';
import { UpdateWindowSideDto } from './dto/update-window-side.dto';
import { WindowSide } from '.prisma/client';
export declare class WindowSideService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createWindowSideDto: CreateWindowSideDto): Promise<WindowSide>;
    findAll(): Promise<WindowSide[]>;
    findOne(id: number): Promise<WindowSide | null>;
    update(id: number, updateWindowSideDto: UpdateWindowSideDto): Promise<WindowSide>;
    remove(id: number): Promise<WindowSide>;
}
