import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Currency } from '.prisma/client';
export declare class CurrencyService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCurrencyDto: CreateCurrencyDto): Promise<Currency>;
    findAll(): Promise<Currency[]>;
    findOne(id: number): Promise<Currency>;
    update(id: number, updateCurrencyDto: UpdateCurrencyDto): Promise<Currency>;
    remove(id: number): Promise<Currency>;
}
